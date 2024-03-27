import { IMessageComposer } from '../../../../../api';
export declare class ActivateQuestMessageComposer implements IMessageComposer<ConstructorParameters<typeof ActivateQuestMessageComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
