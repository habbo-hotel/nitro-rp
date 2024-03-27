import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionPetBreedingEvent extends RoomSessionEvent {
    static PET_BREEDING: string;
    private _state;
    private _ownPetId;
    private _otherPetId;
    constructor(session: IRoomSession, state: number, ownPetId: number, otherPetId: number);
    get state(): number;
    get ownPetId(): number;
    get otherPetId(): number;
}
