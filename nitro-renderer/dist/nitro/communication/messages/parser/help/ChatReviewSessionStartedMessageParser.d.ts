import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ChatReviewSessionStartedMessageParser implements IMessageParser {
    private _votingTimeout;
    private _chatRecord;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get votingTimeout(): number;
    get chatRecord(): string;
}
