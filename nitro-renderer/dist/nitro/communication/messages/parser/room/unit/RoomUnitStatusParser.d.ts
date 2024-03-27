import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { RoomUnitStatusMessage } from './RoomUnitStatusMessage';
export declare class RoomUnitStatusParser implements IMessageParser {
    private _statuses;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    parseStatus(wrapper: IMessageDataWrapper): RoomUnitStatusMessage;
    get statuses(): RoomUnitStatusMessage[];
}
