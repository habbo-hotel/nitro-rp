import { IMessageComposer } from '../../../../../api';
export declare class UpdateHomeRoomMessageComposer implements IMessageComposer<ConstructorParameters<typeof UpdateHomeRoomMessageComposer>> {
    private _data;
    constructor(roomId: number);
    getMessageArray(): [roomId: number];
    dispose(): void;
}
