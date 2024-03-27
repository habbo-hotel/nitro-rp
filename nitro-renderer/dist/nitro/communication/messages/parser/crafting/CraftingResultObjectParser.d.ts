import { IMessageDataWrapper } from '../../../../../api';
export declare class CraftingResultObjectParser {
    private _recipeName;
    private _itemName;
    constructor(wrapper: IMessageDataWrapper);
    get recipeName(): string;
    get itemName(): string;
}
