import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class RoomSettingsSaveErrorParser implements IMessageParser {
    static ERROR_ROOM_NOT_FOUND: number;
    static ERROR_NOT_OWNER: number;
    static ERROR_INVALID_DOOR_MODE: number;
    static ERROR_INVALID_USER_LIMIT: number;
    static ERROR_INVALID_PASSWORD: number;
    static ERROR_INVALID_CATEGORY: number;
    static ERROR_INVALID_NAME: number;
    static ERROR_UNACCEPTABLE_NAME: number;
    static ERROR_INVALID_DESCRIPTION: number;
    static ERROR_UNACCEPTABLE_DESCRIPTION: number;
    static ERROR_INVALID_TAG: number;
    static ERROR_NON_USER_CHOOSABLE_TAG: number;
    static ERROR_TOO_MANY_CHARACTERS_IN_TAG: number;
    private _roomId;
    private _code;
    private _message;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomId(): number;
    get code(): number;
    get message(): string;
}
