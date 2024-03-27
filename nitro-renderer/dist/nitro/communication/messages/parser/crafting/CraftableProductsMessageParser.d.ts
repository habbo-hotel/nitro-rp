import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { CraftingResultObjectParser } from './CraftingResultObjectParser';
export declare class CraftableProductsMessageParser implements IMessageParser {
    private _recipes;
    private _ingredients;
    constructor();
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get recipes(): CraftingResultObjectParser[];
    get ingredients(): string[];
    isActive(): boolean;
}
