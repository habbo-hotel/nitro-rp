import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { ModeratorUserInfoData } from './ModeratorUserInfoData';
export declare class ModeratorUserInfoMessageParser implements IMessageParser {
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get data(): ModeratorUserInfoData;
}
