import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class PhoneCollectionStateParser implements IMessageParser {
    private _phoneStatusCode;
    private _collectionStatusCode;
    private _millisecondsToAllowProcessReset;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get phoneStatusCode(): number;
    get collectionStatusCode(): number;
    get millisecondsToAllowProcessReset(): number;
}
