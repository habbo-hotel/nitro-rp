import { IProductData } from '../../../api';
export declare class ProductData implements IProductData {
    private _type;
    private _name;
    private _description;
    constructor(type: string, name: string, description: string);
    get type(): string;
    get name(): string;
    get description(): string;
}
