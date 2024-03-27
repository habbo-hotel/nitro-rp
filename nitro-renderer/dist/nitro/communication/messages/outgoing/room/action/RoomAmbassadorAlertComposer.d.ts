import { IMessageComposer } from '../../../../../../api';
export declare class RoomAmbassadorAlertComposer implements IMessageComposer<ConstructorParameters<typeof RoomAmbassadorAlertComposer>> {
    private _data;
    constructor(userId: number);
    getMessageArray(): [userId: number];
    dispose(): void;
}
