import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomVisualizationSettingsParser implements IMessageParser {
    private _hideWalls;
    private _thicknessWall;
    private _thicknessFloor;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get hideWalls(): boolean;
    get thicknessWall(): number;
    get thicknessFloor(): number;
}
