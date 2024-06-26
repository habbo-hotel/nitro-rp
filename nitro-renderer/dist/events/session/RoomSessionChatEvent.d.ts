import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionChatEvent extends RoomSessionEvent {
    static CHAT_EVENT: string;
    static FLOOD_EVENT: string;
    static CHAT_TYPE_SPEAK: number;
    static CHAT_TYPE_WHISPER: number;
    static CHAT_TYPE_SHOUT: number;
    static CHAT_TYPE_RESPECT: number;
    static CHAT_TYPE_PETRESPECT: number;
    static CHAT_TYPE_HAND_ITEM_RECEIVED: number;
    static CHAT_TYPE_PETTREAT: number;
    static CHAT_TYPE_PETREVIVE: number;
    static CHAT_TYPE_PET_REBREED_FERTILIZE: number;
    static CHAT_TYPE_PET_SPEED_FERTILIZE: number;
    static CHAT_TYPE_MUTE_REMAINING: number;
    private _objectId;
    private _message;
    private _chatType;
    private _links;
    private _extraParam;
    private _style;
    constructor(type: string, session: IRoomSession, objectId: number, message: string, chatType: number, style?: number, links?: string[], extraParam?: number);
    get objectId(): number;
    get message(): string;
    get chatType(): number;
    get links(): string[];
    get extraParam(): number;
    get style(): number;
}
