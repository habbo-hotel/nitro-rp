import { IMessageComposer } from '../../../../../../api';
export declare class RoomTakeRightsComposer implements IMessageComposer<ConstructorParameters<typeof RoomTakeRightsComposer>> {
    private _data;
    constructor(...userIds: number[]);
    getMessageArray(): number[];
    dispose(): void;
}
