import { IMessageComposer } from '../../../../../api';
export declare class UpdateRoomFilterMessageComposer implements IMessageComposer<ConstructorParameters<typeof UpdateRoomFilterMessageComposer>> {
    private _data;
    constructor(roomId: number, isAddingWord: boolean, word: string);
    getMessageArray(): [roomId: number, isAddingWord: boolean, word: string];
    dispose(): void;
}
