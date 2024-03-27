import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { PetFigureDataParser } from '../../inventory';
export declare class PetFigureUpdateParser implements IMessageParser {
    private _roomIndex;
    private _petId;
    private _figureData;
    private _hasSaddle;
    private _isRiding;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomIndex(): number;
    get petId(): number;
    get figureData(): PetFigureDataParser;
    get hasSaddle(): boolean;
    get isRiding(): boolean;
}
