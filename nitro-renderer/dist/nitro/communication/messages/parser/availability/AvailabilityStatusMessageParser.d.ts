import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class AvailabilityStatusMessageParser implements IMessageParser {
    private _isOpen;
    private _onShutdown;
    private _isAuthenticUser;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get isOpen(): boolean;
    get onShutdown(): boolean;
    get isAuthenticUser(): boolean;
}
