import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { BadgePointLimitsParser } from '../../../parser';
export declare class BadgePointLimitsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): BadgePointLimitsParser;
}
