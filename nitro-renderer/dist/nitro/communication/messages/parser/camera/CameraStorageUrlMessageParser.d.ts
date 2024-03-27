import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CameraStorageUrlMessageParser implements IMessageParser {
    private _url;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get url(): string;
}
