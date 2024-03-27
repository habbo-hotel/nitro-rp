import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { IsUserPartOfCompetitionMessageParser } from '../../parser';
export declare class IsUserPartOfCompetitionMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): IsUserPartOfCompetitionMessageParser;
}
