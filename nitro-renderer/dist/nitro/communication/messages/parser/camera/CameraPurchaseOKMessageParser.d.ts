import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CameraPurchaseOKMessageParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
