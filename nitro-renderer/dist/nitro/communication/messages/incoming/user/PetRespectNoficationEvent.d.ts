import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PetRespectNotificationParser } from '../../parser';
export declare class PetRespectNoficationEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PetRespectNotificationParser;
}
