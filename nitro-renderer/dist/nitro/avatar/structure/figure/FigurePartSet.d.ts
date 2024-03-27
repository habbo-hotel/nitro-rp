import { IFigureDataSet, IFigurePart, IFigurePartSet } from '../../../../api';
export declare class FigurePartSet implements IFigurePartSet {
    private _id;
    private _type;
    private _gender;
    private _clubLevel;
    private _isColorable;
    private _isSelectable;
    private _parts;
    private _hiddenLayers;
    private _isPreSelectable;
    private _isSellable;
    constructor(type: string, data: IFigureDataSet);
    dispose(): void;
    private getPartIndex;
    getPart(k: string, _arg_2: number): IFigurePart;
    get id(): number;
    get type(): string;
    get gender(): string;
    get clubLevel(): number;
    get isColorable(): boolean;
    get isSelectable(): boolean;
    get parts(): IFigurePart[];
    get hiddenLayers(): string[];
    get isPreSelectable(): boolean;
    get isSellable(): boolean;
}
