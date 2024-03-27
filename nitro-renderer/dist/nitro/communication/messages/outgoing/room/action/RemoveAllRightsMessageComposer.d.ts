import { IMessageComposer } from '../../../../../../api';
export declare class RemoveAllRightsMessageComposer implements IMessageComposer<ConstructorParameters<typeof RemoveAllRightsMessageComposer>> {
    private _data;
    constructor(roomId: number);
    getMessageArray(): [roomId: number];
    dispose(): void;
}
