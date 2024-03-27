import { IMessageDataWrapper } from '../../../../../../api';
import { PetFigureDataParser } from './PetFigureDataParser';
export declare class PetData {
    private _id;
    private _name;
    private _figureData;
    private _level;
    constructor(wrapper: IMessageDataWrapper);
    get id(): number;
    get name(): string;
    get typeId(): number;
    get paletteId(): number;
    get color(): string;
    get breedId(): number;
    get customPartCount(): number;
    get figureString(): string;
    get figureData(): PetFigureDataParser;
    get level(): number;
}
