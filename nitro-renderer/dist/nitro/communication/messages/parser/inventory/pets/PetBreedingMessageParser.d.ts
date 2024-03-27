import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class PetBreedingMessageParser implements IMessageParser {
    static STATE_CANCEL: number;
    static STATE_ACCEPT: number;
    static STATE_REQUEST: number;
    private _state;
    private _ownPetId;
    private _otherPetId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get state(): number;
    get ownPetId(): number;
    get otherPetId(): number;
}
