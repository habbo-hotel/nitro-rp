import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { FireworkChargeDataParser } from '../../parser';
export declare class FireworkChargeDataEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FireworkChargeDataParser;
}
