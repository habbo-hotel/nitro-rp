import { IMessageComposer } from '../../../../../../api';
export declare class RoomUnitActionComposer implements IMessageComposer<ConstructorParameters<typeof RoomUnitActionComposer>> {
    private _data;
    constructor(actionType: number);
    getMessageArray(): [actionType: number];
    dispose(): void;
}
