import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { SeasonalQuestsParser } from '../../parser';
export declare class SeasonalQuestsMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): SeasonalQuestsParser;
}
