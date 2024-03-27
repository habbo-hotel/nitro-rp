import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class UserClassificationMessageParser implements IMessageParser {
    private _classifiedUsersNames;
    private _classifiedUsersClass;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get classifiedUsernameMap(): Map<number, string>;
    get classifiedUserTypeMap(): Map<number, string>;
}
