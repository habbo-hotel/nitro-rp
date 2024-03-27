import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionUserFigureUpdateEvent extends RoomSessionEvent {
    static USER_FIGURE: string;
    private _roomIndex;
    private _figure;
    private _gender;
    private _customInfo;
    private _achievementScore;
    constructor(session: IRoomSession, roomIndex: number, figure: string, gender: string, customInfo: string, achievementScore: number);
    get roomIndex(): number;
    get figure(): string;
    get gender(): string;
    get customInfo(): string;
    get activityPoints(): number;
}
