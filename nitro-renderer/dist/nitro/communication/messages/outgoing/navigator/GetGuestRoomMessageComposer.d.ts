import { IMessageComposer } from '../../../../../api';
export declare class GetGuestRoomMessageComposer implements IMessageComposer<[number, number, number]> {
    private _data;
    constructor(roomId: number, enterRoom: boolean, forwardRoom: boolean);
    getMessageArray(): [number, number, number];
    dispose(): void;
}
