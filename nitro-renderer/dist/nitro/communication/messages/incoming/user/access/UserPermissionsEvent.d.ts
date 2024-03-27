import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { UserPermissionsParser } from '../../../parser';
export declare class UserPermissionsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UserPermissionsParser;
}
