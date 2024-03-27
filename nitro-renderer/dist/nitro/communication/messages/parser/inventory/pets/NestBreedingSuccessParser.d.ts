import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class NestBreedingSuccessParser implements IMessageParser {
    private _rarityCategory;
    private _petId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get rarityCategory(): number;
    get petId(): number;
}
