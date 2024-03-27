import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GuideSessionDetachedMessageParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
