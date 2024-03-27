import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class Game2JoiningGameFailedMessageParser implements IMessageParser {
    static readonly KICKED: number;
    static readonly DUPLICATE_MACHINEID: number;
    static readonly INVITATION_REQUIRED: number;
    static readonly NO_SPACE_IN_TEAM: number;
    static readonly TEAM_NOT_FOUND: number;
    static readonly USER_HAS_ACTIVE_INSTANCE: number;
    static readonly USER_HAS_PENDING_INSTANCE_REQUEST: number;
    static readonly USER_HAS_NO_FREE_GAMES_LEFT: number;
    private _reason;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get reason(): number;
}
