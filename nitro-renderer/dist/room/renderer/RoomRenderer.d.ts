import { IRoomObject, IRoomRenderer, IRoomRenderingCanvas, IRoomSpriteCanvasContainer } from '../../api';
export declare class RoomRenderer implements IRoomRenderer, IRoomSpriteCanvasContainer {
    private _objects;
    private _canvases;
    private _disposed;
    private _roomObjectVariableAccurateZ;
    constructor();
    dispose(): void;
    reset(): void;
    getInstanceId(object: IRoomObject): number;
    getRoomObject(instanceId: number): IRoomObject;
    addObject(object: IRoomObject): void;
    removeObject(object: IRoomObject): void;
    render(time: number, update?: boolean): void;
    update(time: number, update?: boolean): void;
    getCanvas(id: number): IRoomRenderingCanvas;
    createCanvas(id: number, width: number, height: number, scale: number): IRoomRenderingCanvas;
    private createSpriteCanvas;
    removeCanvas(id: number): void;
    get objects(): Map<number, IRoomObject>;
    get disposed(): boolean;
    get roomObjectVariableAccurateZ(): string;
    set roomObjectVariableAccurateZ(z: string);
}
