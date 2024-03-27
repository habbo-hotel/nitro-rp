import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { BadgeAndPointLimit } from './BadgeAndPointLimit';
export declare class BadgePointLimitsParser implements IMessageParser {
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get data(): BadgeAndPointLimit[];
}
