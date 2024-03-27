import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { FireworkChargeData } from './FireworkChargeData';
export declare class FireworkChargeDataParser implements IMessageParser {
    private _fireworkChargeData;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get fireworkChargeData(): FireworkChargeData;
}
