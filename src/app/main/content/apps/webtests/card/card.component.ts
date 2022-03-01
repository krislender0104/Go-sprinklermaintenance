import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastNotifications } from 'ngx-toast-notifications';
import { CardServices } from './card.service';
import creditCardType, { getTypeInfo, types as CardType } from 'credit-card-type';
import { ReviewUnsubmittedtestsService } from '../review-unsubmittedtests/review-unsubmittedtests.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cardform: FormGroup;
  cardType: string;
  cardMaxLength = 16;
  CvvMaxLength = 3;
  isFormSubmitted = false;
  isError: boolean = false;
  isProcessing: boolean = false;
  paymentSuccess: boolean = false;
  paymentFailed: boolean = false;
  transactionResponse;
  currentTest;
  isMultiplePay: boolean = false;
  multipleData: Array<any> = [];
  amountForMultipleTest: number = 0;

  constructor(private cardservices: CardServices, private toasts: ToastNotifications,
    private route: ActivatedRoute, private router: Router, private reviewService: ReviewUnsubmittedtestsService) {
    this.currentTest = this.reviewService.getCurrentTestData();
    this.isMultiplePay = this.reviewService.getIsMultiplePay();
    this.multipleData = this.reviewService.getMultipleTestData();
    if (this.currentTest == null && this.isMultiplePay == false) {
      this.router.navigate(['/apps/webtests/review-unsubmittedtests']);
    }
    console.log(this.currentTest);
    console.log(this.multipleData);
    if (this.isMultiplePay) {
      this.multipleData.forEach(data => {
        this.amountForMultipleTest += parseInt(data.amount);
      });
    }
    this.cardform = new FormGroup({
      CardHolderName: new FormControl('', Validators.required),
      CardNumber: new FormControl('', Validators.required),
      CVV: new FormControl('', Validators.required),
      Expiremonth: new FormControl('', { validators: [Validators.required, Validators.minLength(2)] }),
      Expireyear: new FormControl('', { validators: [Validators.required, Validators.minLength(2)] })
    })
  }

  ngOnInit() {
  }
  getCardType(cardNumber: string) {
    this.isError = false;
    this.isFormSubmitted = false;
    if (cardNumber.length >= 4) {
      this.cardType = '';
      const allCards = creditCardType(cardNumber);
      if (allCards.length === 0) {
        this.cardType = 'Invalid';
        this.cardform.controls['CardNumber'].setValidators([Validators.minLength(16)]);
        this.cardform.controls['CVV'].setValidators([Validators.minLength(3)]);
        return;
      }
      allCards.filter((card) => {
        // console.log(card);
        switch (card.type) {
          case CardType.VISA:
            this.cardType = 'VISA';
            this.cardMaxLength = card.lengths[card.lengths.length - 1];
            this.CvvMaxLength = card.code.size;
            this.cardform.controls['CardNumber'].setValidators([Validators.minLength(card.lengths[0])]);
            this.cardform.controls['CVV'].setValidators([Validators.minLength(this.CvvMaxLength)]);
            break;
          case CardType.MASTERCARD:
            this.cardType = 'MASTERCARD';
            this.cardMaxLength = card.lengths[card.lengths.length - 1];
            this.CvvMaxLength = card.code.size;
            this.cardform.controls['CardNumber'].setValidators([Validators.minLength(card.lengths[0])]);
            this.cardform.controls['CVV'].setValidators([Validators.minLength(this.CvvMaxLength)]);
            break;
          case CardType.AMERICAN_EXPRESS:
            this.cardType = 'AMERICAN EXPRESS';
            this.cardMaxLength = card.lengths[card.lengths.length - 1];
            this.CvvMaxLength = card.code.size;
            this.cardform.controls['CardNumber'].setValidators([Validators.minLength(card.lengths[0])]);
            this.cardform.controls['CVV'].setValidators([Validators.minLength(this.CvvMaxLength)]);
            break;
          case CardType.DISCOVER:
            this.cardType = 'DISCOVER';
            this.cardMaxLength = card.lengths[card.lengths.length - 1];
            this.CvvMaxLength = card.code.size;
            this.cardform.controls['CardNumber'].setValidators([Validators.minLength(card.lengths[0])]);
            this.cardform.controls['CVV'].setValidators([Validators.minLength(this.CvvMaxLength)]);
            break;
          default:
            this.cardType = 'Invalid';
        }
      });
    }
    if (cardNumber.length == 0) {
      this.cardType = '';
    }
  }

  makePayment() {
    this.isFormSubmitted = true;
    this.paymentSuccess = false;
    this.paymentFailed = false;
    if (this.cardform.valid) {
      if (this.isMultiplePay) {
        const data = this.cardform.value;
        data['cardType'] = this.cardType;
        data['tests'] = this.multipleData;
        data['amount'] = this.amountForMultipleTest;
        console.log(data);
        this.isError = false;
        this.isProcessing = true;
        this.cardservices.initiateMultplePayment(data).subscribe((response) => {
          console.log(response);
          setTimeout(() => {
            this.isProcessing = false;
            this.transactionResponse = response;
            if (response.status) {
              this.paymentSuccess = true;
              this.paymentFailed = false;
            } else {
              this.paymentSuccess = false;
              this.paymentFailed = true;
            }
          }, 2000);
        });
      } else {
        const data = this.cardform.value;
        data['cardType'] = this.cardType;
        data['test'] = this.currentTest;
        data['amount'] = this.currentTest.amount;
        this.isError = false;
        this.isProcessing = true;
        this.cardservices.initiatePayment(data).subscribe((response) => {
          console.log(response);
          setTimeout(() => {
            this.isProcessing = false;
            this.transactionResponse = response;
            if (response.status) {
              this.paymentSuccess = true;
              this.paymentFailed = false;
            } else {
              this.paymentSuccess = false;
              this.paymentFailed = true;
            }
          }, 2000);
        });
      }
    } else {
      this.isError = true;
    }
  }
  retry() {
    this.paymentFailed = false;
    this.paymentSuccess = false;
    this.isProcessing = false;
    this.isFormSubmitted = false;
  }

}
