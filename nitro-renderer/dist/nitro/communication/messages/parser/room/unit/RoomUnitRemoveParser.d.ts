import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomUnitRemoveParser implements IMessageParser {
    private _unitId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get unitId(): number;
}
