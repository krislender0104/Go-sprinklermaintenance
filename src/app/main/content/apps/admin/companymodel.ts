import { FuseUtils } from '@fuse/utils';

export class Company
{
    id: string;
    Name: string;
    
    constructor(company?)
    {
        company = company || {};
        this.id = company.id || 0;
        this.Name = company.Name || '';
    }
}