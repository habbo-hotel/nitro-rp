import { IMessageComposer } from '../../../../../../../api';
export declare class RoomUnitChatComposer implements IMessageComposer<ConstructorParameters<typeof RoomUnitChatComposer>> {
    private _data;
    constructor(message: string, styleId?: number);
    getMessageArray(): [message: string, styleId?: number];
    dispose(): void;
}
