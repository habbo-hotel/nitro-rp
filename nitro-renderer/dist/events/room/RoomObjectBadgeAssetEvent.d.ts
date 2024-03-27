import { IRoomObject } from '../../api';
import { RoomObjectEvent } from './RoomObjectEvent';
export declare class RoomObjectBadgeAssetEvent extends RoomObjectEvent {
    static LOAD_BADGE: string;
    private _badgeId;
    private _groupBadge;
    constructor(k: string, _arg_2: IRoomObject, badgeId: string, groupBadge?: boolean);
    get badgeId(): string;
    get groupBadge(): boolean;
}
