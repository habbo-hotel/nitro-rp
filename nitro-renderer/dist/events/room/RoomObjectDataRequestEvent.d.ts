import { IRoomObject } from '../../api';
import { RoomObjectEvent } from './RoomObjectEvent';
export declare class RoomObjectDataRequestEvent extends RoomObjectEvent {
    static RODRE_CURRENT_USER_ID: string;
    static RODRE_URL_PREFIX: string;
    constructor(type: string, object: IRoomObject);
}
