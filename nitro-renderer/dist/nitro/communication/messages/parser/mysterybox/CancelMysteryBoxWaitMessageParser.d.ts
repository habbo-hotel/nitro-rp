import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CancelMysteryBoxWaitMessageParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
