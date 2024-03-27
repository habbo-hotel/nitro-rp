import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class RecyclerFinishedMessageParser implements IMessageParser {
    private _recyclerFinishedStatus;
    private _prizeId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get recyclerFinishedStatus(): number;
    get prizeId(): number;
}
