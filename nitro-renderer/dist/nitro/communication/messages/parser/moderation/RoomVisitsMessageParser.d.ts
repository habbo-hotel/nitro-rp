import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { RoomVisitsData } from './RoomVisitsData';
export declare class RoomVisitsMessageParser implements IMessageParser {
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get data(): RoomVisitsData;
}
