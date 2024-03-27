import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class HotelMergeNameChangeParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
