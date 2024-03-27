import { IMessageComposer } from '../../../../../../api';
export declare class RoomUnitPostureComposer implements IMessageComposer<ConstructorParameters<typeof RoomUnitPostureComposer>> {
    private _data;
    constructor(posture: number);
    getMessageArray(): [posture: number];
    dispose(): void;
}
