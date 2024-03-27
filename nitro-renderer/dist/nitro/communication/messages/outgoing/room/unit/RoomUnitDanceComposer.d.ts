import { IMessageComposer } from '../../../../../../api';
export declare class RoomUnitDanceComposer implements IMessageComposer<ConstructorParameters<typeof RoomUnitDanceComposer>> {
    private _data;
    constructor(danceType: number);
    getMessageArray(): [danceType: number];
    dispose(): void;
}
