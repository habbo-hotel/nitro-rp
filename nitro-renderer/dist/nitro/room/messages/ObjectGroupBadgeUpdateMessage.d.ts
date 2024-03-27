import { RoomObjectUpdateMessage } from '../../../room';
export declare class ObjectGroupBadgeUpdateMessage extends RoomObjectUpdateMessage {
    static BADGE_LOADED: string;
    private _badgeId;
    private _assetName;
    constructor(badgeId: string, assetName: string);
    get badgeId(): string;
    get assetName(): string;
}
