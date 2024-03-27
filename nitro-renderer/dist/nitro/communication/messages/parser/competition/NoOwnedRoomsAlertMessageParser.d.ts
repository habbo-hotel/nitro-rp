import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class NoOwnedRoomsAlertMessageParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
