import { IMessageComposer } from '../../../../../api';
export declare class GetWardrobeMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetWardrobeMessageComposer>> {
    private _data;
    constructor(pageId?: number);
    getMessageArray(): [pageId?: number];
    dispose(): void;
}
