import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class PetRemovedFromInventoryParser implements IMessageParser {
    private _petId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get petId(): number;
}
