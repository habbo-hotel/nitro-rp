import { IMessageDataWrapper } from '../../../../../api';
export declare class MessageData {
    private _groupId;
    private _messageId;
    private _messageIndex;
    private _authorId;
    private _threadId;
    private _creationTime;
    private _messageText;
    private _authorName;
    private _authorFigure;
    private _state;
    private _adminId;
    private _adminName;
    private _adminOperationTimeAsSeccondsAgo;
    private _authorPostCount;
    static parse(wrapper: IMessageDataWrapper): MessageData;
    get state(): number;
    set state(state: number);
    get adminId(): number;
    set adminId(id: number);
    get adminName(): string;
    set adminName(name: string);
    get adminOperationTimeAsSeccondsAgo(): number;
    set adminOperationTimeAsSeccondsAgo(time: number);
    get messageId(): number;
    set messageId(id: number);
    get creationTime(): number;
    set creationTime(time: number);
    get authorName(): string;
    set authorName(name: string);
    get authorFigure(): string;
    set authorFigure(figure: string);
    get threadId(): number;
    set threadId(id: number);
    get messageIndex(): number;
    set messageIndex(index: number);
    set groupID(id: number);
    get groupId(): number;
    get authorId(): number;
    set authorId(id: number);
    get messageText(): string;
    set messageText(text: string);
    get authorPostCount(): number;
    set authorPostCount(count: number);
}
