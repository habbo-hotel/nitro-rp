import { IMessageComposer } from '../../../../../api';
export declare class CancelEventMessageComposer implements IMessageComposer<ConstructorParameters<typeof CancelEventMessageComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
