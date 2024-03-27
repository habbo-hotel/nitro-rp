import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class DesktopViewParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
