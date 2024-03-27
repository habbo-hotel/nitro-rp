import { IMessageDataWrapper } from '../../../../../api';
import { RoomVisitData } from './RoomVisitData';
export declare class RoomVisitsData {
    private _userId;
    private _userName;
    private _rooms;
    constructor(k: IMessageDataWrapper);
    get userId(): number;
    get userName(): string;
    get rooms(): RoomVisitData[];
}
