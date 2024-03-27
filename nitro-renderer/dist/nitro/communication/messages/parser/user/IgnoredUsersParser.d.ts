import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class IgnoredUsersParser implements IMessageParser {
    private _ignoredUsers;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get ignoredUsers(): string[];
}
