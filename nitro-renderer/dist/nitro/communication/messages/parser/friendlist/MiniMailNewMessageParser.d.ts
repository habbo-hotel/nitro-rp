import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class MiniMailNewMessageParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
