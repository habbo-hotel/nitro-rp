import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class NavigatorOpenRoomCreatorParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
