import { IMessageComposer } from '../../../../../../api';
export declare class UpdateFloorPropertiesMessageComposer implements IMessageComposer<ConstructorParameters<typeof UpdateFloorPropertiesMessageComposer>> {
    private _data;
    constructor(model: string, doorX: number, doorY: number, doorDirection: number, thicknessWall: number, thicknessFloor: number, wallHeight: number);
    getMessageArray(): [model: string, doorX: number, doorY: number, doorDirection: number, thicknessWall: number, thicknessFloor: number, wallHeight: number];
    dispose(): void;
}
