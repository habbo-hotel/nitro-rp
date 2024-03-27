import { IMessageComposer } from '../../../../../../api';
export declare class JoinQueueMessageComposer implements IMessageComposer<ConstructorParameters<typeof JoinQueueMessageComposer>> {
    private _data;
    constructor(k: number);
    dispose(): void;
    getMessageArray(): [k: number];
}
