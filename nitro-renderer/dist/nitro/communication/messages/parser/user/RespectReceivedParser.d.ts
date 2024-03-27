import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class RespectReceivedParser implements IMessageParser {
    private _userId;
    private _respectsReceived;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get userId(): number;
    get respectsReceived(): number;
}
