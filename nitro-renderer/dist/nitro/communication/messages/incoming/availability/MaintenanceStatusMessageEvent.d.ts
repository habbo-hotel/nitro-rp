import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { MaintenanceStatusMessageParser } from '../../parser';
export declare class MaintenanceStatusMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): MaintenanceStatusMessageParser;
}
