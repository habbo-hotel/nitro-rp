import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class PetLevelUpdateMessageParser implements IMessageParser {
    private _roomIndex;
    private _petId;
    private _level;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomIndex(): number;
    get petId(): number;
    get level(): number;
}
