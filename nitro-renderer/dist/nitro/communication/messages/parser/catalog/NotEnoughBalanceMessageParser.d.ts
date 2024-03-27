import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class NotEnoughBalanceMessageParser implements IMessageParser {
    private _notEnoughCredits;
    private _notEnoughActivityPoints;
    private _activityPointType;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get notEnoughCredits(): boolean;
    get notEnoughActivityPoints(): boolean;
    get activityPointType(): number;
}
