import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class NoobnessLevelMessageParser implements IMessageParser {
    private _noobnessLevel;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get noobnessLevel(): number;
}
