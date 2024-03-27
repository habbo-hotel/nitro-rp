import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { BadgesParser } from '../../../parser';
export declare class BadgesEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): BadgesParser;
}
