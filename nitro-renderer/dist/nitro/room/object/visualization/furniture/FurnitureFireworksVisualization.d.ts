import { FurnitureAnimatedVisualization } from './FurnitureAnimatedVisualization';
export declare class FurnitureFireworksVisualization extends FurnitureAnimatedVisualization {
    private _particleSystems;
    private _currentParticleSystem;
    dispose(): void;
    protected updateObject(scale: number, direction: number): boolean;
    protected updateSprites(scale: number, update: boolean, animation: number): void;
    protected updateAnimation(scale: number): number;
    protected setAnimation(id: number): void;
    protected getLayerYOffset(scale: number, direction: number, layerId: number): number;
    private readDefinition;
}
