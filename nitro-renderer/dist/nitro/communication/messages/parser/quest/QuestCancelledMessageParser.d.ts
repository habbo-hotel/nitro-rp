import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class QuestCancelledMessageParser implements IMessageParser {
    private _expired;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get expired(): boolean;
}
