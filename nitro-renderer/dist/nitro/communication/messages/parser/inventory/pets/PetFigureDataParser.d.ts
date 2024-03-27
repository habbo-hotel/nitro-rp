import { IMessageDataWrapper, IPetFigureData } from '../../../../../../api';
export declare class PetFigureDataParser implements IPetFigureData {
    private _typeId;
    private _paletteId;
    private _color;
    private _breedId;
    private _customPartCount;
    private _customParts;
    constructor(wrapper: IMessageDataWrapper);
    get typeId(): number;
    get paletteId(): number;
    get color(): string;
    get breedId(): number;
    get figuredata(): string;
    get customParts(): number[];
    get custompartCount(): number;
}
