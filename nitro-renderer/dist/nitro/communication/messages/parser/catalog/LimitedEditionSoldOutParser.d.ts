import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class LimitedEditionSoldOutParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
