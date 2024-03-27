import { IMessageComposer } from '../../../../../api';
export declare class OpenCampaignCalendarDoorComposer implements IMessageComposer<ConstructorParameters<typeof OpenCampaignCalendarDoorComposer>> {
    private _data;
    constructor(k: string, _arg_2: number);
    dispose(): void;
    getMessageArray(): [k: string, _arg_2: number];
}
