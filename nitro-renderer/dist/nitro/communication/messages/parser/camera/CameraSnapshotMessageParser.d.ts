import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CameraSnapshotMessageParser implements IMessageParser {
    private _roomType;
    private _roomId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomType(): string;
    get roomId(): number;
}
