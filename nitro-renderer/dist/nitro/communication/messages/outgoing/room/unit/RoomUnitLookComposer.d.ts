import { IMessageComposer } from '../../../../../../api';
export declare class RoomUnitLookComposer implements IMessageComposer<ConstructorParameters<typeof RoomUnitLookComposer>> {
    private _data;
    constructor(x: number, y: number);
    getMessageArray(): [x: number, y: number];
    dispose(): void;
}
