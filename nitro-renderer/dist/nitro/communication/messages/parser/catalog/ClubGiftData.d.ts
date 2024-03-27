import { IMessageDataWrapper } from '../../../../../api';
export declare class ClubGiftData {
    private _offerId;
    private _isVip;
    private _isSelectable;
    private _daysRequired;
    constructor(wrapper: IMessageDataWrapper);
    get offerId(): number;
    get isVip(): boolean;
    get isSelectable(): boolean;
    get daysRequired(): number;
}
