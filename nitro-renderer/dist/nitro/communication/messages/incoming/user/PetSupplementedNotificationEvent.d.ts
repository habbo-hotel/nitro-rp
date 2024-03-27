import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PetSupplementedNotificationParser } from '../../parser';
export declare class PetSupplementedNotificationEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PetSupplementedNotificationParser;
}
