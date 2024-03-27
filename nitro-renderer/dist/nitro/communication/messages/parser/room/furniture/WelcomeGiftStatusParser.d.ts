import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class WelcomeGiftStatusParser implements IMessageParser {
    private _email;
    private _isVerified;
    private _allowChange;
    private _furniId;
    private _requestedByUser;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get email(): string;
    get isVerified(): boolean;
    get allowChange(): boolean;
    get furniId(): number;
    get requestedByUser(): boolean;
}
