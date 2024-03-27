import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class WiredSaveSuccessParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
