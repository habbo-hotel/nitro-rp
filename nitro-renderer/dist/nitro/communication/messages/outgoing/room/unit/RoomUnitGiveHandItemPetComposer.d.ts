import { IMessageComposer } from '../../../../../../api';
export declare class RoomUnitGiveHandItemPetComposer implements IMessageComposer<ConstructorParameters<typeof RoomUnitGiveHandItemPetComposer>> {
    private _data;
    constructor(unitId: number);
    getMessageArray(): [unitId: number];
    dispose(): void;
}
