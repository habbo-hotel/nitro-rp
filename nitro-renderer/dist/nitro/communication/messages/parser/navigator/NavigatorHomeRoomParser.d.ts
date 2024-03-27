import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class NavigatorHomeRoomParser implements IMessageParser {
    private _homeRoomId;
    private _roomIdToEnter;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get homeRoomId(): number;
    get roomIdToEnter(): number;
}
