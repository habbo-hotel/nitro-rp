import { IMessageComposer } from '../../../../../../../api';
export declare class RoomUnitChatStyleComposer implements IMessageComposer<ConstructorParameters<typeof RoomUnitChatStyleComposer>> {
    private _data;
    constructor(styleId: number);
    getMessageArray(): [styleId: number];
    dispose(): void;
}
