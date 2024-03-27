import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class PetExperienceParser implements IMessageParser {
    private _petId;
    private _roomIndex;
    private _gainedExperience;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get petId(): number;
    get roomIndex(): number;
    get gainedExperience(): number;
}
