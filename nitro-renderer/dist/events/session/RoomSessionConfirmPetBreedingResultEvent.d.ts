import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionConfirmPetBreedingResultEvent extends RoomSessionEvent {
    static RSPFUE_CONFIRM_PET_BREEDING_RESULT: string;
    private _breedingNestStuffId;
    private _result;
    constructor(session: IRoomSession, breedingNestStuffId: number, result: number);
    get breedingNestStuffId(): number;
    get result(): number;
}
