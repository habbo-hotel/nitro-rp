import { IFigureDataPart, IFigurePart } from '../../../../api';
export declare class FigurePart implements IFigurePart {
    private _id;
    private _type;
    private _breed;
    private _index;
    private _colorLayerIndex;
    private _paletteMapId;
    constructor(data: IFigureDataPart);
    dispose(): void;
    get id(): number;
    get type(): string;
    get breed(): number;
    get index(): number;
    get colorLayerIndex(): number;
    get paletteMap(): number;
}
