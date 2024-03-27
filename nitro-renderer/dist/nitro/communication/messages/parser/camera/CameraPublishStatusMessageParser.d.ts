import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CameraPublishStatusMessageParser implements IMessageParser {
    private _ok;
    private _secondsToWait;
    private _extraDataId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get ok(): boolean;
    get secondsToWait(): number;
    get extraDataId(): string;
}
