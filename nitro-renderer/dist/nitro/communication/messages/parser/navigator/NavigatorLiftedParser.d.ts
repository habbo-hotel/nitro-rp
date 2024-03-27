import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { NavigatorLiftedDataParser } from './NavigatorLiftedDataParser';
export declare class NavigatorLiftedParser implements IMessageParser {
    private _rooms;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get rooms(): NavigatorLiftedDataParser[];
}
