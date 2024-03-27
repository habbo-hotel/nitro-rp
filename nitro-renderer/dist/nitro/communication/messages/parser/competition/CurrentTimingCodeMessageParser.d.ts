import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CurrentTimingCodeMessageParser implements IMessageParser {
    private _schedulingStr;
    private _code;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get schedulingStr(): string;
    get code(): string;
}
