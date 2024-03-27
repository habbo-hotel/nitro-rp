import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { MemberData } from '../../incoming';
export declare class GroupMembershipRequestedMessageParser implements IMessageParser {
    private _groupId;
    private _requester;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get groupId(): number;
    get requester(): MemberData;
}
