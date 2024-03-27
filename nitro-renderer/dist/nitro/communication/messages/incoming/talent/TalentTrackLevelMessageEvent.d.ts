import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { TalentTrackLevelMessageParser } from '../../parser';
export declare class TalentTrackLevelMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): TalentTrackLevelMessageParser;
}
