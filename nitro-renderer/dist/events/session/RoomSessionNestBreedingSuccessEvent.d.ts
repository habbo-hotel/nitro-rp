import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionNestBreedingSuccessEvent extends RoomSessionEvent {
    static NEST_BREEDING_SUCCESS: string;
    private _rarityCategory;
    private _petId;
    constructor(session: IRoomSession, petId: number, rarityCategory: number);
    get rarityCategory(): number;
    get petId(): number;
}
