import { FuseUtils } from '@fuse/utils';

export class PendingTester
{
    code: string;
    description:string;
    RowNum:number;
    uid:string;
    Datestamp:string;
    testerId:number;
    selectedTests:any;
    appointmentdate:any;
    constructor(pendingTester)
    {
        {
            this.RowNum=pendingTester.RowNum;
            this.uid=pendingTester.uid||'';
            this.code = pendingTester.name || '';
            this.Datestamp=pendingTester.Datestamp||'';
            this.description = pendingTester.description || '';
            this.testerId=pendingTester.testerId||'';
            this.selectedTests=pendingTester.selectedTests;
            this.appointmentdate=pendingTester.appointmentdate;
        }
    }
}
