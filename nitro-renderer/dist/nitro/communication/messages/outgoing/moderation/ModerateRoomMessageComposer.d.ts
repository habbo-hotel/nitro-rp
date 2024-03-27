import { IMessageComposer } from '../../../../../api';
export declare class ModerateRoomMessageComposer implements IMessageComposer<ConstructorParameters<typeof ModerateRoomMessageComposer>> {
    private _data;
    constructor(roomId: number, lockDoor: number, changeTitle: number, kickUsers: number);
    getMessageArray(): [roomId: number, lockDoor: number, changeTitle: number, kickUsers: number];
    dispose(): void;
}
