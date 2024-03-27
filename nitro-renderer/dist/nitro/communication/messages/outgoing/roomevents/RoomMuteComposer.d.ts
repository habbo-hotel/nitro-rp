import { IMessageComposer } from '../../../../../api';
export declare class RoomMuteComposer implements IMessageComposer<unknown[]> {
    private _data;
    constructor();
    getMessageArray(): unknown[];
    dispose(): void;
}
