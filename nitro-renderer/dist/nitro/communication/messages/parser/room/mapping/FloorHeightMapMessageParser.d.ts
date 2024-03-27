import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class FloorHeightMapMessageParser implements IMessageParser {
    static TILE_BLOCKED: number;
    private _model;
    private _width;
    private _height;
    private _heightMap;
    private _wallHeight;
    private _scale;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    parseModel(modelString: string, wallHeight: number, scale?: boolean): boolean;
    private parseExplicitly;
    getHeight(x: number, y: number): number;
    get model(): string;
    get width(): number;
    get height(): number;
    get heightMap(): number[][];
    get wallHeight(): number;
    get scale(): number;
}
