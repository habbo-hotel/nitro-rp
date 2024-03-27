import { IFigureDataColor, IPartColor } from '../../../../api';
export declare class PartColor implements IPartColor {
    private _id;
    private _index;
    private _clubLevel;
    private _isSelectable;
    private _rgb;
    constructor(data: IFigureDataColor);
    get id(): number;
    get index(): number;
    get clubLevel(): number;
    get isSelectable(): boolean;
    get rgb(): number;
}
