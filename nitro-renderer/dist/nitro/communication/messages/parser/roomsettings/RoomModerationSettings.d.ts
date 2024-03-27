import { IMessageDataWrapper, IRoomModerationSettings } from '../../../../../api';
export declare class RoomModerationSettings implements IRoomModerationSettings {
    static MODERATION_LEVEL_NONE: number;
    static MODERATION_LEVEL_USER_WITH_RIGHTS: number;
    static MODERATION_LEVEL_ALL: number;
    private _allowMute;
    private _allowKick;
    private _allowBan;
    constructor(wrapper: IMessageDataWrapper);
    get allowMute(): number;
    get allowKick(): number;
    get allowBan(): number;
}
