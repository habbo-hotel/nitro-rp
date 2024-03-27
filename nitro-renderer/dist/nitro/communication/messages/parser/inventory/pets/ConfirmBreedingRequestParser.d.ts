import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { BreedingPetInfo, RarityCategoryData } from '../../room';
export declare class ConfirmBreedingRequestParser implements IMessageParser {
    private _nestId;
    private _pet1;
    private _pet2;
    private _rarityCategories;
    private _resultPetType;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get nestId(): number;
    get pet1(): BreedingPetInfo;
    get pet2(): BreedingPetInfo;
    get rarityCategories(): RarityCategoryData[];
    get resultPetType(): number;
}
