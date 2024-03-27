import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class SanctionStatusMessageParser implements IMessageParser {
    private _isSanctionNew;
    private _isSanctionActive;
    private _sanctionName;
    private _sanctionLengthHours;
    private _sanctionReason;
    private _sanctionCreationTime;
    private _probationHoursLeft;
    private _nextSanctionName;
    private _nextSanctionLengthHours;
    private _hasCustomMute;
    private _tradeLockExpiryTime;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get isSanctionNew(): boolean;
    get isSanctionActive(): boolean;
    get sanctionName(): string;
    get sanctionLengthHours(): number;
    get sanctionReason(): string;
    get sanctionCreationTime(): string;
    get probationHoursLeft(): number;
    get nextSanctionName(): string;
    get nextSanctionLengthHours(): number;
    get hasCustomMute(): boolean;
    get tradeLockExpiryTime(): string;
}
