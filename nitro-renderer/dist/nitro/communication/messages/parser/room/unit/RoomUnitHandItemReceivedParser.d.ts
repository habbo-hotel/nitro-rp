import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomUnitHandItemReceivedParser implements IMessageParser {
    private _giverUserId;
    private _handItemType;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get giverUserId(): number;
    get handItemType(): number;
}
