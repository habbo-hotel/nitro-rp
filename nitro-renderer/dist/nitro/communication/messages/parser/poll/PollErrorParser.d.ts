import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class PollErrorParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
