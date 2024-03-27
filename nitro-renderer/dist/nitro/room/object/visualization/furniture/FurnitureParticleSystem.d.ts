import { IParticleSystem } from '../../../../../api';
import { FurnitureAnimatedVisualization } from './FurnitureAnimatedVisualization';
export declare class FurnitureParticleSystem {
    private _emitters;
    private _visualization;
    private _size;
    private _canvasId;
    private _offsetY;
    private _currentEmitter;
    private _canvasTexture;
    private _roomSprite;
    private _hasIgnited;
    private _centerX;
    private _centerY;
    private _scaleMultiplier;
    private _blackOverlay;
    private _blackOverlayAlphaTransform;
    private _particleColorTransform;
    private _identityMatrix;
    private _translationMatrix;
    private _blend;
    private _bgColor;
    private _emptySprite;
    private _isDone;
    constructor(visualization: FurnitureAnimatedVisualization);
    dispose(): void;
    reset(): void;
    setAnimation(id: number): void;
    private updateCanvas;
    getLayerYOffset(scale: number, direction: number, layerId: number): number;
    controlsSprite(k: number): boolean;
    updateSprites(): void;
    updateAnimation(): void;
    parseData(particleSystem: IParticleSystem): void;
    copyStateFrom(particleSystem: FurnitureParticleSystem): void;
    private clearCanvas;
}