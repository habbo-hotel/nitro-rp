import { IMessageDataWrapper } from '../../../../../api';
export declare class CraftingRecipeIngredientParser {
    private _count;
    private _itemName;
    constructor(wrapper: IMessageDataWrapper);
    get count(): number;
    get itemName(): string;
}
