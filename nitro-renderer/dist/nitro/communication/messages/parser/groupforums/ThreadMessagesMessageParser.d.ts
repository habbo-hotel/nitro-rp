import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { MessageData } from './MessageData';
export declare class ThreadMessagesMessageParser implements IMessageParser {
    private _groupId;
    private _threadId;
    private _startIndex;
    private _amount;
    private _messages;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get groupId(): number;
    get threadId(): number;
    get startIndex(): number;
    get amount(): number;
    get messages(): MessageData[];
}
