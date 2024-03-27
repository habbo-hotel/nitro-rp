import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class HabboGroupBadgesMessageParser implements IMessageParser {
    private _badges;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get badges(): Map<number, string>;
}
