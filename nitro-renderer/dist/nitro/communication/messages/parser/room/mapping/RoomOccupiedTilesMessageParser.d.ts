import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomOccupiedTilesMessageParser implements IMessageParser {
    private _blockedTilesMap;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get blockedTilesMap(): boolean[][];
}
