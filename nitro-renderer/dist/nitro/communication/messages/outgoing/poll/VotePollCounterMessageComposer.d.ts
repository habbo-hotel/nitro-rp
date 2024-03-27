import { IMessageComposer } from '../../../../../api';
export declare class VotePollCounterMessageComposer implements IMessageComposer<ConstructorParameters<typeof VotePollCounterMessageComposer>> {
    private _data;
    constructor(counter: number);
    getMessageArray(): [counter: number];
    dispose(): void;
}
