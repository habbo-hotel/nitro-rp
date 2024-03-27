import { IMessageDataWrapper } from '../../../../../api';
import { IFlatUser } from './IFlatUser';
export declare class FlatControllerData implements IFlatUser {
    private _userId;
    private _userName;
    private _selected;
    constructor(wrapper: IMessageDataWrapper);
    get userId(): number;
    get userName(): string;
    get selected(): boolean;
    set selected(selected: boolean);
}
