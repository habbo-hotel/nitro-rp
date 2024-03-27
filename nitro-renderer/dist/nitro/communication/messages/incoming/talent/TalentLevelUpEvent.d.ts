import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { TalentLevelUpMessageParser } from '../../parser';
export declare class TalentLevelUpEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): TalentLevelUpMessageParser;
}
