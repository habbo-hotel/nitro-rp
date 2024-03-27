import { IMessageDataWrapper, IMessageParser } from '../../../../../../../api';
export declare class RoomUnitTypingParser implements IMessageParser {
    private _unitId;
    private _isTyping;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get unitId(): number;
    get isTyping(): boolean;
}
