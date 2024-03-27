import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class Game2InArenaQueueMessageParser implements IMessageParser {
    private _position;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get position(): number;
}
