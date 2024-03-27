import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionErrorMessageEvent extends RoomSessionEvent {
    static RSEME_KICKED: string;
    static RSEME_PETS_FORBIDDEN_IN_HOTEL: string;
    static RSEME_PETS_FORBIDDEN_IN_FLAT: string;
    static RSEME_MAX_PETS: string;
    static RSEME_MAX_NUMBER_OF_OWN_PETS: string;
    static RSEME_NO_FREE_TILES_FOR_PET: string;
    static RSEME_SELECTED_TILE_NOT_FREE_FOR_PET: string;
    static RSEME_BOTS_FORBIDDEN_IN_HOTEL: string;
    static RSEME_BOTS_FORBIDDEN_IN_FLAT: string;
    static RSEME_BOT_LIMIT_REACHED: string;
    static RSEME_SELECTED_TILE_NOT_FREE_FOR_BOT: string;
    static RSEME_BOT_NAME_NOT_ACCEPTED: string;
    private _message;
    constructor(k: string, _arg_2: IRoomSession, _arg_3?: string);
    get message(): string;
}
