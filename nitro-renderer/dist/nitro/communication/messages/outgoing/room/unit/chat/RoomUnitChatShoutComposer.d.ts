import { IMessageComposer } from '../../../../../../../api';
export declare class RoomUnitChatShoutComposer implements IMessageComposer<ConstructorParameters<typeof RoomUnitChatShoutComposer>> {
    private _data;
    constructor(message: string, styleId: number);
    getMessageArray(): [message: string, styleId: number];
    dispose(): void;
}
