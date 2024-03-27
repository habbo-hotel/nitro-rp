import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class CommunityVoteReceivedParser implements IMessageParser {
    private _acknowledged;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get acknowledged(): boolean;
}
