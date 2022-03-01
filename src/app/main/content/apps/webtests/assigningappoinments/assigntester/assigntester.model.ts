import { FuseUtils } from '@fuse/utils';

export class AssignTester
{
    code: string;
    description:string;
    RowNum:number;
    uid:string;
    Datestamp:string;
    testerId:number;
    selectedTests:any;
    appointmentdate:any;
    constructor(assigntester)
    {
        {
            this.RowNum=assigntester.RowNum;
            this.uid=assigntester.uid||'';
            this.code = assigntester.name || '';
            this.Datestamp=assigntester.Datestamp||'';
            this.description = assigntester.description || '';
            this.testerId=assigntester.testerId||'';
            this.selectedTests=assigntester.selectedTests;
            this.appointmentdate=assigntester.appointmentdate;
        }
    }
}
