import { IMessageComposer } from '../../../../../../api';
export declare class RoomEnterComposer implements IMessageComposer<ConstructorParameters<typeof RoomEnterComposer>> {
    private _data;
    constructor(roomId: number, password?: string);
    getMessageArray(): [roomId: number, password?: string];
    dispose(): void;
}
