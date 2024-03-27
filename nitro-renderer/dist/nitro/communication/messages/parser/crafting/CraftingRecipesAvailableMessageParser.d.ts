import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CraftingRecipesAvailableMessageParser implements IMessageParser {
    private _hasRecipes;
    private _count;
    parse(wrapper: IMessageDataWrapper): boolean;
    flush(): boolean;
    get count(): number;
    get hasRecipes(): boolean;
}
