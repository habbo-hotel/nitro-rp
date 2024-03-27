import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CompetitionStatusMessageParser } from '../../parser';
export declare class CompetitionStatusMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CompetitionStatusMessageParser;
}
