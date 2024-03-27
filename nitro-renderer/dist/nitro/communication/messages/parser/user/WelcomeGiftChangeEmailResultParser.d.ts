import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class WelcomeGiftChangeEmailResultParser implements IMessageParser {
    private _result;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get result(): number;
}
