import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class Game2StopCounterMessageParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
