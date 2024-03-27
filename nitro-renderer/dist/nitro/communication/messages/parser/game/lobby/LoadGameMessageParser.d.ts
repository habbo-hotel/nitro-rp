import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class LoadGameMessageParser implements IMessageParser {
    private _gameTypeId;
    private _url;
    private _quality;
    private _scaleMode;
    private _frameRate;
    private _minMajorVersion;
    private _minMinorVersion;
    private _params;
    private _gameClientId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get gameTypeId(): number;
    get url(): string;
    get quality(): string;
    get scaleMode(): string;
    get frameRate(): number;
    get minMajorVersion(): number;
    get minMinorVersion(): number;
    get params(): Map<string, string>;
    get gameClientId(): string;
}
