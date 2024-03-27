import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CfhSanctionMessageParser } from '../../parser';
export declare class CfhSanctionMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CfhSanctionMessageParser;
}
