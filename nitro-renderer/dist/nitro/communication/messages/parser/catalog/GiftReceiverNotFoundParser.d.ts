import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GiftReceiverNotFoundParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
