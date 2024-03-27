import { IMessageComposer } from '../../../../../api';
export declare class GuideSessionFeedbackMessageComposer implements IMessageComposer<ConstructorParameters<typeof GuideSessionFeedbackMessageComposer>> {
    private _data;
    constructor(k: boolean);
    getMessageArray(): [k: boolean];
    dispose(): void;
}
