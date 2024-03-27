import { IMessageComposer } from '../../../../../../../api';
export declare class RoomUnitChatWhisperComposer implements IMessageComposer<[string, number]> {
    private _data;
    constructor(recipientName: string, message: string, styleId: number);
    getMessageArray(): [string, number];
    dispose(): void;
}
