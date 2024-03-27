import { IMessageComposer } from '../../../../../api';
export declare class StartCampaignMessageComposer implements IMessageComposer<ConstructorParameters<typeof StartCampaignMessageComposer>> {
    private _data;
    constructor(k: string);
    getMessageArray(): [k: string];
    dispose(): void;
}
