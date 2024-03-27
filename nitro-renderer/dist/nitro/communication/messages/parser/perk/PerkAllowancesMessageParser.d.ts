import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { PerkData } from './common';
export declare class PerkAllowancesMessageParser implements IMessageParser {
    private _perks;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    isAllowed(perkCode: string): boolean;
    get perks(): PerkData[];
}
