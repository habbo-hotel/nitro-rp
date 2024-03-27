import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class NavigatorSettingsParser implements IMessageParser {
    private _windowX;
    private _windowY;
    private _windowWidth;
    private _windowHeight;
    private _leftPanelHidden;
    private _resultsMode;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get windowX(): number;
    get windowY(): number;
    get windowWidth(): number;
    get windowHeight(): number;
    get leftPanelHidden(): boolean;
    get resultsMode(): number;
}
