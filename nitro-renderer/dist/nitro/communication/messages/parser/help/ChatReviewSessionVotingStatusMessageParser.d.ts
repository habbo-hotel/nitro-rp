import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ChatReviewSessionVotingStatusMessageParser implements IMessageParser {
    static readonly AWAITING_VOTE = 0;
    static readonly VOTED_OK = 1;
    static readonly VOTED_BAD = 2;
    static readonly VOTED_VERY_BAD = 3;
    static readonly NO_VOTE = 4;
    static readonly FINDING_NEW_VOTER = 5;
    private _status;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get status(): number[];
}
