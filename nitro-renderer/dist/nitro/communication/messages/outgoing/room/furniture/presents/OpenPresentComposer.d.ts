import { IMessageComposer } from '../../../../../../../api';
export declare class OpenPresentComposer implements IMessageComposer<ConstructorParameters<typeof OpenPresentComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
