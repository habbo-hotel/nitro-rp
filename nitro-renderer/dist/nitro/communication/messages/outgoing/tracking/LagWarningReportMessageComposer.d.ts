import { IMessageComposer } from '../../../../../api';
export declare class LagWarningReportMessageComposer implements IMessageComposer<ConstructorParameters<typeof LagWarningReportMessageComposer>> {
    private _data;
    constructor(warningCount: number);
    getMessageArray(): [warningCount: number];
    dispose(): void;
}
