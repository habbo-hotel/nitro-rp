import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PetLevelNotificationParser } from '../../parser';
export declare class PetLevelNotificationEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PetLevelNotificationParser;
}
