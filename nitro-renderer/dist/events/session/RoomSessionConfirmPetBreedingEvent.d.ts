import { IRoomSession } from '../../api';
import { BreedingPetInfo, RarityCategoryData } from '../../nitro';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionConfirmPetBreedingEvent extends RoomSessionEvent {
    static CONFIRM_PET_BREEDING: string;
    private _nestId;
    private _pet1;
    private _pet2;
    private _rarityCategories;
    private _resultPetTypeId;
    constructor(session: IRoomSession, nestId: number, pet1: BreedingPetInfo, pet2: BreedingPetInfo, rarityCategories: RarityCategoryData[], resultPetTypeId: number);
    get nestId(): number;
    get pet1(): BreedingPetInfo;
    get pet2(): BreedingPetInfo;
    get rarityCategories(): RarityCategoryData[];
    get resultPetTypeId(): number;
}
