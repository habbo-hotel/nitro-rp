import { IMessageDataWrapper } from '../../../../../api';
import { ChatlineData } from './ChatlineData';
export declare class ChatRecordData {
    static readonly TYPE_SIMPLE = 0;
    static readonly TYPE_ROOM_CHAT = 1;
    static readonly TYPE_IM_SESSION = 2;
    static readonly TYPE_DISCUSSION_THREAD = 3;
    static readonly TYPE_DISCUSSION_MESSAGE = 4;
    static readonly TYPE_SELFIE = 5;
    static readonly TYPE_PHOTO = 6;
    private _recordType;
    private _context;
    private _chatlog;
    constructor(wrapper: IMessageDataWrapper);
    get recordType(): number;
    get context(): Map<string, any>;
    get chatlog(): ChatlineData[];
    get roomId(): number;
    get roomName(): string;
    get groupId(): number;
    get threadId(): number;
    get messageId(): number;
    private getInt;
}
