import { IMessageComposer } from '../../../../../api';
export declare class RateFlatMessageComposer implements IMessageComposer<ConstructorParameters<typeof RateFlatMessageComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
