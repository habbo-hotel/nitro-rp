import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class RestoreClientMessageParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
