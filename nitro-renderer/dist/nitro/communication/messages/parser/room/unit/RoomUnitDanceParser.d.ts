import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomUnitDanceParser implements IMessageParser {
    private _unitId;
    private _danceId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get unitId(): number;
    get danceId(): number;
}
