import { IMessageComposer } from '../../../../../../api';
export declare class RoomUnitGiveHandItemComposer implements IMessageComposer<ConstructorParameters<typeof RoomUnitGiveHandItemComposer>> {
    private _data;
    constructor(unitId: number);
    getMessageArray(): [unitId: number];
    dispose(): void;
}
