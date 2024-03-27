import { IMessageComposer } from '../../../../../../api';
export declare class RoomUnitWalkComposer implements IMessageComposer<ConstructorParameters<typeof RoomUnitWalkComposer>> {
    private _data;
    constructor(x: number, y: number);
    getMessageArray(): [x: number, y: number];
    dispose(): void;
}
