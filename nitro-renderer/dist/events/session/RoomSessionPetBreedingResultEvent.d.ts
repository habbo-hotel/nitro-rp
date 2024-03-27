import { IPetBreedingResultData, IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionPetBreedingResultEvent extends RoomSessionEvent {
    static PET_BREEDING_RESULT: string;
    private _resultData;
    private _otherResultData;
    constructor(session: IRoomSession, resultData: IPetBreedingResultData, otherResultData: IPetBreedingResultData);
    get resultData(): IPetBreedingResultData;
    get otherResultData(): IPetBreedingResultData;
}
