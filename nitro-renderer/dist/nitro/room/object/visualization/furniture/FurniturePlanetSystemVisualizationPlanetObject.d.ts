import { Vector3d } from '../../../../../api';
export declare class FurniturePlanetSystemVisualizationPlanetObject {
    private static SYSTEM_TEMPO;
    private _name;
    private _index;
    private _radius;
    private _arcSpeed;
    private _arcOffset;
    private _height;
    private _position;
    private _positionVector;
    private _children;
    constructor(name: string, index: number, radius: number, arcSpeed: number, arcOffset: number, height: number);
    dispose(): void;
    update(offsets: Vector3d[], rootPosition: Vector3d, scale: number): void;
    getPositionVector(position: Vector3d, scale: number): Vector3d;
    addChild(planetObject: FurniturePlanetSystemVisualizationPlanetObject): void;
    hasChild(name: string): boolean;
    getChild(name: string): FurniturePlanetSystemVisualizationPlanetObject;
    get name(): string;
}
