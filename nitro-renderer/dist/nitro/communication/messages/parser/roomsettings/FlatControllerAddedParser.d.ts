import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { FlatControllerData } from './FlatControllerData';
export declare class FlatControllerAddedParser implements IMessageParser {
    private _roomId;
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomId(): number;
    get data(): FlatControllerData;
}
