import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionPetFigureUpdateEvent extends RoomSessionEvent {
    static PET_FIGURE_UPDATE: string;
    private _petId;
    private _figure;
    constructor(roomSession: IRoomSession, id: number, figure: string);
    get id(): number;
    get figure(): string;
}
