import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ChatReviewSessionResultsMessageParser implements IMessageParser {
    private _winningVoteCode;
    private _ownVoteCode;
    private _finalStatus;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get winningVoteCode(): number;
    get ownVoteCode(): number;
    get finalStatus(): number[];
}
