import { IMessageComposer } from '../../../../../api';
export declare class GuideSessionReportMessageComposer implements IMessageComposer<ConstructorParameters<typeof GuideSessionReportMessageComposer>> {
    private _data;
    constructor(k: string);
    getMessageArray(): [k: string];
    dispose(): void;
}
