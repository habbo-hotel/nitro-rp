import { IRoomPetData, IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionPetInfoUpdateEvent extends RoomSessionEvent {
    static PET_INFO: string;
    private _petInfo;
    constructor(k: IRoomSession, _arg_2: IRoomPetData);
    get petInfo(): IRoomPetData;
}
