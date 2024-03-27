import { IMessageComposer } from '../../../../../api';
export declare class GetCurrentTimingCodeMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetCurrentTimingCodeMessageComposer>> {
    private _data;
    constructor(k: string);
    getMessageArray(): [k: string];
    dispose(): void;
}
