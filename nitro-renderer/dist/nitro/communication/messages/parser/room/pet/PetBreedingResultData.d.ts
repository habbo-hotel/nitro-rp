import { IMessageDataWrapper, IPetBreedingResultData } from '../../../../../../api';
export declare class PetBreedingResultData implements IPetBreedingResultData {
    private _stuffId;
    private _classId;
    private _productCode;
    private _userId;
    private _userName;
    private _rarityLevel;
    private _hasMutation;
    constructor(wrapper: IMessageDataWrapper);
    get stuffId(): number;
    get classId(): number;
    get productCode(): string;
    get userId(): number;
    get userName(): string;
    get rarityLevel(): number;
    get hasMutation(): boolean;
}
