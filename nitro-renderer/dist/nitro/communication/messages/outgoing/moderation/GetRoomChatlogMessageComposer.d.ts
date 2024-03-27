import { IMessageComposer } from '../../../../../api';
export declare class GetRoomChatlogMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetRoomChatlogMessageComposer>> {
    private _data;
    constructor(roomId: number, useless?: number);
    getMessageArray(): [roomId: number, useless?: number];
    dispose(): void;
}
