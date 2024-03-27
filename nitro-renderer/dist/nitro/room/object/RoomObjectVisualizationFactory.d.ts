import { IAssetData, IObjectVisualizationData, IRoomObjectGraphicVisualization, IRoomObjectVisualizationFactory } from '../../../api';
import { RoomObjectSpriteVisualization } from '../../../room';
export declare class RoomObjectVisualizationFactory implements IRoomObjectVisualizationFactory {
    private static CACHING_ENABLED;
    private _visualizationDatas;
    constructor();
    getVisualization(type: string): IRoomObjectGraphicVisualization;
    getVisualizationType(type: string): typeof RoomObjectSpriteVisualization;
    getVisualizationData(type: string, visualization: string, asset: IAssetData): IObjectVisualizationData;
}
