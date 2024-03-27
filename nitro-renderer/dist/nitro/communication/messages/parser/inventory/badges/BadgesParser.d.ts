import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class BadgesParser implements IMessageParser {
    private _allBadgeCodes;
    private _activeBadgeCodes;
    private _badgeIds;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    getBadgeId(code: string): number;
    getAllBadgeCodes(): string[];
    getActiveBadgeCodes(): string[];
}
