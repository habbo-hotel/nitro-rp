import { IAdvancedMap, IFigureDataSetType, IFigurePartSet, ISetType } from '../../../../api';
export declare class SetType implements ISetType {
    private _type;
    private _paletteId;
    private _isMandatory;
    private _partSets;
    constructor(data: IFigureDataSetType);
    dispose(): void;
    cleanUp(data: IFigureDataSetType): void;
    append(setType: IFigureDataSetType): void;
    getDefaultPartSet(gender: string): IFigurePartSet;
    getPartSet(k: number): IFigurePartSet;
    get type(): string;
    get paletteID(): number;
    isMandatory(k: string, _arg_2: number): boolean;
    optionalFromClubLevel(k: string): number;
    get partSets(): IAdvancedMap<string, IFigurePartSet>;
}
