import { IMessageComposer } from '../../../../../../api';
export declare class RoomUnitSignComposer implements IMessageComposer<ConstructorParameters<typeof RoomUnitSignComposer>> {
    private _data;
    constructor(signType: number);
    getMessageArray(): [signType: number];
    dispose(): void;
}
