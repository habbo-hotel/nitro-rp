import { IMessageDataWrapper, IMessageParser } from '../../../../../../../api';
export declare class UserCreditsParser implements IMessageParser {
    private _credits;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get credits(): string;
}
