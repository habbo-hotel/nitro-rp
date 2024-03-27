import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GuideSessionRequesterRoomMessageParser implements IMessageParser {
    private _requesterRoomId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get requesterRoomId(): number;
}
