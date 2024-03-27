import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { BotSkillListUpdateParser } from '../../../parser';
export declare class BotSkillListUpdateEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): BotSkillListUpdateParser;
}
