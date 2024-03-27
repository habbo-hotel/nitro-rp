import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { ForumData } from './ForumData';
export declare class GetForumsListMessageParser implements IMessageParser {
    private _listCode;
    private _totalAmount;
    private _startIndex;
    private _amount;
    private _forums;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get listCode(): number;
    get totalAmount(): number;
    get startIndex(): number;
    get amount(): number;
    get forums(): ForumData[];
}
