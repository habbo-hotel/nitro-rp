import { IFurnitureData, INitroLocalizationManager } from '../../../api';
import { EventDispatcher } from '../../../core';
export declare class FurnitureDataLoader extends EventDispatcher {
    static FURNITURE_DATA_READY: string;
    static FURNITURE_DATA_ERROR: string;
    private _floorItems;
    private _wallItems;
    private _localization;
    constructor(floorItems: Map<number, IFurnitureData>, wallItems: Map<number, IFurnitureData>, localization: INitroLocalizationManager);
    loadFurnitureData(url: string): void;
    private onFurnitureDataLoaded;
    private onFurnitureDataError;
    private parseFloorItems;
    private parseWallItems;
    private updateLocalizations;
}
