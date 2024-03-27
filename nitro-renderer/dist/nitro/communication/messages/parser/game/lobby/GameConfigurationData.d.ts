export declare class GameConfigurationData {
    private _gameId;
    private _gameNameId;
    private _bgColor;
    private _textColor;
    private _assetUrl;
    private _supportUrl;
    constructor(gameId: number, gameNameId: string, bgColor: number, textColor: number, assetUrl: string, supportUrl: string);
    get gameId(): number;
    get gameNameId(): string;
    get bgColor(): number;
    get textColor(): number;
    get assetUrl(): string;
    get supportUrl(): string;
}
