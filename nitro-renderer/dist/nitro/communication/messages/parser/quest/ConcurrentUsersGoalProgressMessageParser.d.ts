import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ConcurrentUsersGoalProgressMessageParser implements IMessageParser {
    private _state;
    private _userCount;
    private _userCountGoal;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get state(): number;
    get userCount(): number;
    get userCountGoal(): number;
}
