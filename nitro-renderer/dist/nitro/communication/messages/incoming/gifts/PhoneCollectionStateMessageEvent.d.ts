import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PhoneCollectionStateParser } from '../../parser';
export declare class PhoneCollectionStateMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PhoneCollectionStateParser;
}
