import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { HabboGroupEntryData } from './HabboGroupEntryData';
export declare class GuildMembershipsMessageParser implements IMessageParser {
    private _groups;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get groups(): HabboGroupEntryData[];
}
