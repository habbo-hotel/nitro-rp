import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class RoomThumbnailUpdateResultMessageParser implements IMessageParser {
    private _flatId;
    private _resultCode;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get flatId(): number;
    get resultCode(): number;
}
