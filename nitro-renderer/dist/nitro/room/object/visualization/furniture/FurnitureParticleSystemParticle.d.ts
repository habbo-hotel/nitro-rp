import { IGraphicAsset } from '../../../../../api';
import { Vector3D } from '../../../../avatar';
export declare class FurnitureParticleSystemParticle {
    private _x;
    private _y;
    private _z;
    private _lastX;
    private _lastY;
    private _lastZ;
    private _hasMoved;
    private _particleDirection;
    private _age;
    private _lifeTime;
    private _isEmitter;
    private _fade;
    private _fadeTime;
    private _alphaMultiplier;
    private _frames;
    init(x: number, y: number, z: number, direction: Vector3D, energy: number, timeStep: number, lifeTime: number, isEmitter?: boolean, frames?: IGraphicAsset[], fade?: boolean): void;
    dispose(): void;
    update(): void;
    getAsset(): IGraphicAsset;
    protected ignite(): void;
    get fade(): boolean;
    get alphaMultiplier(): number;
    get direction(): Vector3D;
    get age(): number;
    get isEmitter(): boolean;
    get isAlive(): boolean;
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    get z(): number;
    set z(z: number);
    get lastX(): number;
    set lastX(y: number);
    get lastY(): number;
    set lastY(k: number);
    get lastZ(): number;
    set lastZ(z: number);
    get hasMoved(): boolean;
    toString(): string;
    copy(particle: FurnitureParticleSystemParticle, scale: number): void;
}
