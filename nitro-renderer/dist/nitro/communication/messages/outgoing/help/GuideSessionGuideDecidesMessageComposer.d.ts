import { IMessageComposer } from '../../../../../api';
export declare class GuideSessionGuideDecidesMessageComposer implements IMessageComposer<ConstructorParameters<typeof GuideSessionGuideDecidesMessageComposer>> {
    private _data;
    constructor(k: boolean);
    getMessageArray(): [k: boolean];
    dispose(): void;
}
