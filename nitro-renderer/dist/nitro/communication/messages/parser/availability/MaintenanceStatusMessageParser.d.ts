import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class MaintenanceStatusMessageParser implements IMessageParser {
    private _isInMaintenance;
    private _minutesUntilMaintenance;
    private _duration;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get isInMaintenance(): boolean;
    get minutesUntilMaintenance(): number;
    get duration(): number;
}
