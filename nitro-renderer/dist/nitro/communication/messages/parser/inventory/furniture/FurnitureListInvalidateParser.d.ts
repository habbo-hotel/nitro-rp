import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class FurnitureListInvalidateParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
