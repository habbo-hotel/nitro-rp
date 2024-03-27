import { IMessageDataWrapper } from '../../../../../api';
export declare class RoomChatSettings {
    static CHAT_MODE_FREE_FLOW: number;
    static CHAT_MODE_LINE_BY_LINE: number;
    static CHAT_BUBBLE_WIDTH_WIDE: number;
    static CHAT_BUBBLE_WIDTH_NORMAL: number;
    static CHAT_BUBBLE_WIDTH_THIN: number;
    static CHAT_SCROLL_SPEED_FAST: number;
    static CHAT_SCROLL_SPEED_NORMAL: number;
    static CHAT_SCROLL_SPEED_SLOW: number;
    static FLOOD_FILTER_STRICT: number;
    static FLOOD_FILTER_NORMAL: number;
    static FLOOD_FILTER_LOOSE: number;
    private _mode;
    private _weight;
    private _speed;
    private _distance;
    private _protection;
    constructor(wrapper: IMessageDataWrapper);
    get mode(): number;
    get weight(): number;
    get speed(): number;
    get distance(): number;
    get protection(): number;
}
