import { IMessageDataWrapper } from '../../../../../api';
import { INamed } from '../moderation';
export declare class CfhSanctionTypeData implements INamed {
    private _name;
    private _sanctionLengthInHours;
    private _probationDays;
    private _avatarOnly;
    private _tradeLockInfo;
    private _machineBanInfo;
    constructor(wrapper: IMessageDataWrapper);
    get name(): string;
    get sanctionLengthInHours(): number;
    get avatarOnly(): boolean;
    get tradeLockInfo(): string;
    get machineBanInfo(): string;
}
