import { IMessageComposer } from '../../../../../api';
export declare class PollStartComposer implements IMessageComposer<ConstructorParameters<typeof PollStartComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
