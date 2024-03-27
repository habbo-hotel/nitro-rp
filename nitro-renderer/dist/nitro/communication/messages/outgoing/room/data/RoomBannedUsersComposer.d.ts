import { IMessageComposer } from '../../../../../../api';
export declare class RoomBannedUsersComposer implements IMessageComposer<[number]> {
    private _data;
    constructor(roomId: number);
    getMessageArray(): [number];
    dispose(): void;
}
