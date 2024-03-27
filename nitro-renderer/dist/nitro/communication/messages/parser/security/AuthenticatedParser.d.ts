import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class AuthenticatedParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
