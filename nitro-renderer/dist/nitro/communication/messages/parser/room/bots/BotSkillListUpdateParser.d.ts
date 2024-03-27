import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { BotSkillData } from './BotSkillData';
export declare class BotSkillListUpdateParser implements IMessageParser {
    private _botId;
    private _skillList;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get botId(): number;
    get skillList(): BotSkillData[];
}
