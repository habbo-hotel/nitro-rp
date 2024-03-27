import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GroupBuyDataParser implements IMessageParser {
    private _groupCost;
    private _availableRooms;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get groupCost(): number;
    get availableRooms(): Map<number, string>;
}
