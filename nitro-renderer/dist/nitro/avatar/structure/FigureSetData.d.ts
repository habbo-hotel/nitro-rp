import { IFigureData, IFigurePartSet, IFigureSetData, IPalette, ISetType, IStructureData } from '../../../api';
export declare class FigureSetData implements IFigureSetData, IStructureData {
    private _palettes;
    private _setTypes;
    constructor();
    dispose(): void;
    parse(data: IFigureData): boolean;
    injectJSON(data: IFigureData): void;
    appendJSON(data: IFigureData): boolean;
    getMandatorySetTypeIds(k: string, _arg_2: number): string[];
    getDefaultPartSet(type: string, gender: string): IFigurePartSet;
    getSetType(k: string): ISetType;
    getPalette(k: number): IPalette;
    getFigurePartSet(k: number): IFigurePartSet;
}
