import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class RoomSettingsErrorParser implements IMessageParser {
    private _roomId;
    private _code;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomId(): number;
    get code(): number;
}
