import { IRoomGeometry } from '../../../../../../../api';
import { PlaneVisualization } from './PlaneVisualization';
import { PlaneVisualizationLayer } from './PlaneVisualizationLayer';
export declare class Plane {
    private _planeVisualizations;
    private _sizes;
    private _lastPlaneVisualization;
    private _lastSize;
    constructor();
    isStatic(size: number): boolean;
    dispose(): void;
    clearCache(): void;
    createPlaneVisualization(size: number, totalLayers: number, geometry: IRoomGeometry): PlaneVisualization;
    private getSizeIndex;
    getPlaneVisualization(size: number): PlaneVisualization;
    getLayers(): PlaneVisualizationLayer[];
}
