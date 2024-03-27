import { IMessageComposer } from '../../../../../api';
export declare class ChatReviewSessionCreateMessageComposer implements IMessageComposer<ConstructorParameters<typeof ChatReviewSessionCreateMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: number);
    getMessageArray(): [k: number, _arg_2: number];
    dispose(): void;
}
