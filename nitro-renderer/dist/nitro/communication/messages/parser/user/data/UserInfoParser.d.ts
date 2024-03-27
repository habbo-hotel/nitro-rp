import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { UserInfoDataParser } from './UserInfoDataParser';
export declare class UserInfoParser implements IMessageParser {
    private _userInfo;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get userInfo(): UserInfoDataParser;
}
