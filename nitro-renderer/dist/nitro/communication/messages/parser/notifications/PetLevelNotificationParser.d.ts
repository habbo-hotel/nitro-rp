import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { PetFigureDataParser } from '../inventory';
export declare class PetLevelNotificationParser implements IMessageParser {
    private _petId;
    private _petName;
    private _level;
    private _figureData;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get petId(): number;
    get petName(): string;
    get level(): number;
    get figureData(): PetFigureDataParser;
}
