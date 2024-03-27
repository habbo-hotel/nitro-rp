import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { CraftingRecipeIngredientParser } from './CraftingRecipeIngredientParser';
export declare class CraftingRecipeMessageParser implements IMessageParser {
    private _ingredients;
    constructor();
    parse(wrapper: IMessageDataWrapper): boolean;
    flush(): boolean;
    get ingredients(): CraftingRecipeIngredientParser[];
}
