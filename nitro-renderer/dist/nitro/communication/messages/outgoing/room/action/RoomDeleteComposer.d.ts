import { IMessageComposer } from '../../../../../../api';
export declare class RoomDeleteComposer implements IMessageComposer<[number]> {
    private _data;
    constructor(roomId: number);
    getMessageArray(): [number];
    dispose(): void;
}
