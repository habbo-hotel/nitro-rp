import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { CraftingResultObjectParser } from './CraftingResultObjectParser';
export declare class CraftingResultMessageParser implements IMessageParser {
    private _success;
    private _result;
    parse(wrapper: IMessageDataWrapper): boolean;
    flush(): boolean;
    get success(): boolean;
    get result(): CraftingResultObjectParser;
}
