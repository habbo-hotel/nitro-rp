import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionUserBadgesEvent extends RoomSessionEvent {
    static RSUBE_BADGES: string;
    private _userId;
    private _badges;
    constructor(k: IRoomSession, _arg_2: number, _arg_3: string[]);
    get userId(): number;
    get badges(): string[];
}
