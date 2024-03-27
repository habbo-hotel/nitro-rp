import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionPetStatusUpdateEvent extends RoomSessionEvent {
    static PET_STATUS_UPDATE: string;
    private _petId;
    private _canBreed;
    private _canHarvest;
    private _canRevive;
    private _hasBreedingPermission;
    constructor(roomSession: IRoomSession, petId: number, canBreed: boolean, canHarvest: boolean, canRevive: boolean, hasBreedingPermission: boolean);
    get petId(): number;
    get canBreed(): boolean;
    get canHarvest(): boolean;
    get canRevive(): boolean;
    get hasBreedingPermission(): boolean;
}
