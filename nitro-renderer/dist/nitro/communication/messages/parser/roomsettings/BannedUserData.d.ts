import { IMessageDataWrapper } from '../../../../../api';
import { IFlatUser } from './IFlatUser';
export declare class BannedUserData implements IFlatUser {
    private _userId;
    private _userName;
    constructor(wrapper: IMessageDataWrapper);
    get userId(): number;
    get userName(): string;
}
