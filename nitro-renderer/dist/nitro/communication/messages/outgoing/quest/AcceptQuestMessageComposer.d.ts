import { IMessageComposer } from '../../../../../api';
export declare class AcceptQuestMessageComposer implements IMessageComposer<ConstructorParameters<typeof AcceptQuestMessageComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
