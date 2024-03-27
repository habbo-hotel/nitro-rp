import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomUnitHandItemParser implements IMessageParser {
    private _unitId;
    private _handId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get unitId(): number;
    get handId(): number;
}
