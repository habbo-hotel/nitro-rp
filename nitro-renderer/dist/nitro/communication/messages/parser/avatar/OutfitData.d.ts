import { IMessageDataWrapper } from '../../../../../api';
export declare class OutfitData {
    private _slotId;
    private _figureString;
    private _gender;
    constructor(wrapper: IMessageDataWrapper);
    get slotId(): number;
    get figureString(): string;
    get gender(): string;
}
