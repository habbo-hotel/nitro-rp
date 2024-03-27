import { IMessageComposer } from '../../../../../api';
export declare class SearchFaqsMessageComposer implements IMessageComposer<ConstructorParameters<typeof SearchFaqsMessageComposer>> {
    private _data;
    constructor(k: string);
    getMessageArray(): [k: string];
    dispose(): void;
}
