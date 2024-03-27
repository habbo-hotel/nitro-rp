import { FurnitureAnimatedVisualization } from './FurnitureAnimatedVisualization';
export declare class FurniturePlanetSystemVisualization extends FurnitureAnimatedVisualization {
    private _planetIndex;
    private _planetNameIndex;
    private _offsetArray;
    private _rootPosition;
    constructor();
    dispose(): void;
    protected updateAnimation(scale: number): number;
    protected getLayerXOffset(scale: number, direction: number, layerId: number): number;
    protected getLayerYOffset(scale: number, direction: number, layerId: number): number;
    protected getLayerZOffset(scale: number, direction: number, layerId: number): number;
    private processPlanets;
    private addPlanet;
    private getPlanet;
}
