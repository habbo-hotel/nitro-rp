import { IMessageComposer } from '../../../../../api';
export declare class ForwardToSomeRoomMessageComposer implements IMessageComposer<ConstructorParameters<typeof ForwardToSomeRoomMessageComposer>> {
    private _data;
    constructor(k: string);
    getMessageArray(): [k: string];
    dispose(): void;
}
