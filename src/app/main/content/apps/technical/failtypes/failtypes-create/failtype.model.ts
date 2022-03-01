import { FuseUtils } from '@fuse/utils';

export class FailType
{
    code: string;
    description:string;
    RowNum:number;
    uid:string;
    Datestamp:string;

    constructor(failtype)
    {
        {
            this.RowNum=failtype.RowNum;
            this.uid=failtype.uid||'';
            this.code = failtype.name || '';
            this.Datestamp=failtype.Datestamp||'';
            this.description = failtype.description || '';
        }
    }
}
