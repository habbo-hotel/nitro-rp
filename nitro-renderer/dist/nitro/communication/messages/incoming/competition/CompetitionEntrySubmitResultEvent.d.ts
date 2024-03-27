import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CompetitionEntrySubmitResultMessageParser } from '../../parser';
export declare class CompetitionEntrySubmitResultEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CompetitionEntrySubmitResultMessageParser;
}
