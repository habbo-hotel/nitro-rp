import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class Game2WeeklyLeaderboardParser implements IMessageParser {
    private _year;
    private _week;
    private _maxOffset;
    private _currentOffset;
    private _minutesUntilReset;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get year(): number;
    get week(): number;
    get maxOffset(): number;
    get currentOffset(): number;
    get minutesUntilReset(): number;
}
