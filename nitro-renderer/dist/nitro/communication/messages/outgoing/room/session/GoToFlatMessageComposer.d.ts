import { IMessageComposer } from '../../../../../../api';
export declare class GoToFlatMessageComposer implements IMessageComposer<ConstructorParameters<typeof GoToFlatMessageComposer>> {
    private _data;
    constructor(roomId: number);
    getMessageArray(): [roomId: number];
    dispose(): void;
}
