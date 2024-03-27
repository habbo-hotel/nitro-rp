import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ShowMysteryBoxWaitMessageParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
