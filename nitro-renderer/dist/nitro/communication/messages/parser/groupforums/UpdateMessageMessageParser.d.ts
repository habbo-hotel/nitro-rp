import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { MessageData } from './MessageData';
export declare class UpdateMessageMessageParser implements IMessageParser {
    private _groupId;
    private _threadId;
    private _message;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get groupId(): number;
    get threadId(): number;
    get message(): MessageData;
}
