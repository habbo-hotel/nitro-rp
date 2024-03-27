import { IMessageComposer } from '../../../../../../api';
export declare class LeaveQueueMessageComposer implements IMessageComposer<ConstructorParameters<typeof LeaveQueueMessageComposer>> {
    private _data;
    constructor(k: number);
    dispose(): void;
    getMessageArray(): [k: number];
}
