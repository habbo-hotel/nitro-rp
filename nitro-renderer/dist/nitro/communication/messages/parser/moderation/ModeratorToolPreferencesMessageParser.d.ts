import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ModeratorToolPreferencesMessageParser implements IMessageParser {
    private _windowX;
    private _windowY;
    private _windowWidth;
    private _windowHeight;
    flush(): boolean;
    parse(k: IMessageDataWrapper): boolean;
    get windowX(): number;
    get windowY(): number;
    get windowWidth(): number;
    get windowHeight(): number;
}
