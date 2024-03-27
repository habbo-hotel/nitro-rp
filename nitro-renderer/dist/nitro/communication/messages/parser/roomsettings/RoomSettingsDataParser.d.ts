import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { RoomSettingsData } from './RoomSettingsData';
export declare class RoomSettingsDataParser implements IMessageParser {
    private _roomSettingsData;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get data(): RoomSettingsData;
}
