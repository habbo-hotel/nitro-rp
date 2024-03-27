import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { CatalogPageMessageProductData } from '../../catalog';
export declare class WeeklyGameRewardParser implements IMessageParser {
    private _gameTypeId;
    private _products;
    private _minutesUntilNextWeek;
    private _rewardingOn;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get gameTypeId(): number;
    get products(): CatalogPageMessageProductData[];
    get minutesUntilNextWeek(): number;
    get rewardingOn(): boolean;
}
