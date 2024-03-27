import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class AvailabilityTimeMessageParser implements IMessageParser {
    private _isOpen;
    private _minutesUntilChange;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get isOpen(): boolean;
    get minutesUntilChange(): number;
}
