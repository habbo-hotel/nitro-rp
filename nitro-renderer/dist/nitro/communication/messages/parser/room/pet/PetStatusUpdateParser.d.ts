import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class PetStatusUpdateParser implements IMessageParser {
    private _roomIndex;
    private _petId;
    private _canBreed;
    private _canHarvest;
    private _canRevive;
    private _hasBreedingPermission;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomIndex(): number;
    get petId(): number;
    get canBreed(): boolean;
    get canHarvest(): boolean;
    get canRevive(): boolean;
    get hasBreedingPermission(): boolean;
}
