import { IMessageComposer } from '../../../../../api';
export declare class ChatReviewGuideVoteMessageComposer implements IMessageComposer<ConstructorParameters<typeof ChatReviewGuideVoteMessageComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
