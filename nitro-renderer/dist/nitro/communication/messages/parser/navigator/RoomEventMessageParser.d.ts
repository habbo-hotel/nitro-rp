import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { RoomEventData } from './utils';
export declare class RoomEventMessageParser implements IMessageParser {
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get data(): RoomEventData;
}
