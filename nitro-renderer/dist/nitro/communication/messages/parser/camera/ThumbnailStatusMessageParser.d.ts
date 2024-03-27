import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ThumbnailStatusMessageParser implements IMessageParser {
    private _ok;
    private _renderLimitHit;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get ok(): boolean;
    get isRenderLimitHit(): boolean;
}
