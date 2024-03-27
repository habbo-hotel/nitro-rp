import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ChatReviewSessionDetachedMessageParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
