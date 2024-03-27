import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CompetitionVotingInfoMessageParser implements IMessageParser {
    private _goalId;
    private _goalCode;
    private _resultCode;
    private _votesRemaining;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get goalId(): number;
    get goalCode(): string;
    get isVotingAllowedForUser(): boolean;
    get votesRemaining(): number;
    get resultCode(): number;
}
