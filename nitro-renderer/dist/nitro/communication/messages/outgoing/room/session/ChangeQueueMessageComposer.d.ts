import { IMessageComposer } from '../../../../../../api';
export declare class ChangeQueueMessageComposer implements IMessageComposer<ConstructorParameters<typeof ChangeQueueMessageComposer>> {
    private _data;
    constructor(targetQueue: number);
    getMessageArray(): [targetQueue: number];
    dispose(): void;
}
