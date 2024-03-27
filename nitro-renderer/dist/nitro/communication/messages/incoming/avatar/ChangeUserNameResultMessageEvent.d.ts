import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ChangeUserNameResultMessageParser } from '../../parser';
export declare class ChangeUserNameResultMessageEvent extends MessageEvent implements IMessageEvent {
    static NAME_OK: number;
    static ERROR_NAME_REQUIRED: number;
    static ERROR_NAME_TOO_SHORT: number;
    static ERROR_NAME_TOO_LONG: number;
    static ERROR_NAME_NOT_VALID: number;
    static ERROR_NAME_IN_USE: number;
    static ERROR_NAME_CHANGE_NOT_ALLOWED: number;
    static ERROR_MERGE_HOTEL_DOWN: number;
    constructor(callBack: Function);
    getParser(): ChangeUserNameResultMessageParser;
}
