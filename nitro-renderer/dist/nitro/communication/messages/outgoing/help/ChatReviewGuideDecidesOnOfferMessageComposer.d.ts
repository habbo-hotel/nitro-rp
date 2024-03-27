import { IMessageComposer } from '../../../../../api';
export declare class ChatReviewGuideDecidesOnOfferMessageComposer implements IMessageComposer<ConstructorParameters<typeof ChatReviewGuideDecidesOnOfferMessageComposer>> {
    private _data;
    constructor(k: boolean);
    getMessageArray(): [k: boolean];
    dispose(): void;
}
