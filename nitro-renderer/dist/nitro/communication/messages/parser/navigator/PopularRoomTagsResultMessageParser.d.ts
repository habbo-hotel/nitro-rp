import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { PopularRoomTagsData } from './PopularRoomTagsData';
export declare class PopularRoomTagsResultMessageParser implements IMessageParser {
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get data(): PopularRoomTagsData;
}
