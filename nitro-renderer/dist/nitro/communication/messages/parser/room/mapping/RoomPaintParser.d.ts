import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomPaintParser implements IMessageParser {
    private _floorType;
    private _wallType;
    private _landscapeType;
    private _landscapeAnimation;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get floorType(): string;
    get wallType(): string;
    get landscapeType(): string;
    get landscapeAnimation(): string;
}
