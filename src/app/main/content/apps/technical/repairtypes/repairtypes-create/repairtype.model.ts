import { FuseUtils } from '@fuse/utils';

export class RepairType
{
    Code: string;
    Description:string;
    RowNum:number;
    constructor(repairtype)
    {
        {
            this.RowNum=repairtype.RowNum;
            this.Code = repairtype.Name || '';
            this.Description = repairtype.Description || '';
        }
    }
}
