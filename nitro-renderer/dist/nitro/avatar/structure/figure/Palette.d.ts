import { IAdvancedMap, IFigureDataPalette, IPalette, IPartColor } from '../../../../api';
export declare class Palette implements IPalette {
    private _id;
    private _colors;
    constructor(data: IFigureDataPalette);
    append(data: IFigureDataPalette): void;
    getColor(id: number): IPartColor;
    get id(): number;
    get colors(): IAdvancedMap<string, IPartColor>;
}
