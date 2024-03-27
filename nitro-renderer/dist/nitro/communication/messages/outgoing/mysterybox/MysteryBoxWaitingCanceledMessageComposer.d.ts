import { IMessageComposer } from '../../../../../api';
export declare class MysteryBoxWaitingCanceledMessageComposer implements IMessageComposer<ConstructorParameters<typeof MysteryBoxWaitingCanceledMessageComposer>> {
    private _data;
    constructor(k: number);
    dispose(): void;
    getMessageArray(): [k: number];
}
