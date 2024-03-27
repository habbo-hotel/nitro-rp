import { IMessageComposer } from '../../../../../api';
export declare class GuideSessionIsTypingMessageComposer implements IMessageComposer<ConstructorParameters<typeof GuideSessionIsTypingMessageComposer>> {
    private _data;
    constructor(k: boolean);
    getMessageArray(): [k: boolean];
    dispose(): void;
}
