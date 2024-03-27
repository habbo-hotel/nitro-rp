import { IMessageComposer } from '../../../../../api';
export declare class PollRejectComposer implements IMessageComposer<ConstructorParameters<typeof PollRejectComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
