import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class IsBadgeRequestFulfilledParser implements IMessageParser {
    private _requestCode;
    private _fulfilled;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get requestCode(): string;
    get fulfilled(): boolean;
}
