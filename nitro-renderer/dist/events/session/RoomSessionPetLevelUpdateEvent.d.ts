import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionPetLevelUpdateEvent extends RoomSessionEvent {
    static PET_LEVEL_UPDATE: string;
    private _petId;
    private _level;
    constructor(session: IRoomSession, petId: number, level: number);
    get petId(): number;
    get level(): number;
}
