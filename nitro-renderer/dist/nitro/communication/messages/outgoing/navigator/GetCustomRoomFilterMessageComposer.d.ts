import { IMessageComposer } from '../../../../../api';
export declare class GetCustomRoomFilterMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetCustomRoomFilterMessageComposer>> {
    private _data;
    constructor(roomId: number);
    getMessageArray(): [roomId: number];
    dispose(): void;
}
