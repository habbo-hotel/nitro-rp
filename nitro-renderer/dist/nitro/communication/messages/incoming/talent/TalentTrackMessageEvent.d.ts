import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { TalentTrackParser } from '../../parser';
export declare class TalentTrackMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): TalentTrackParser;
}
