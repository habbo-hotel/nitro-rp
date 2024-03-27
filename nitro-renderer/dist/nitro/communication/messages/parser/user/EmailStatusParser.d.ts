import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class EmailStatusParser implements IMessageParser {
    private _email;
    private _isVerified;
    private _allowChange;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get email(): string;
    get isVerified(): boolean;
    get allowChange(): boolean;
}
