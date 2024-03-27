import { IMessageComposer } from '../../../../../api';
export declare class CloseIssuesMessageComposer implements IMessageComposer<number[]> {
    static readonly RESOLUTION_USELESS = 1;
    static readonly RESOLUTION_ABUSIVE = 2;
    static readonly RESOLUTION_RESOLVED = 3;
    private _data;
    constructor(issueIds: number[], resolutionType: number);
    getMessageArray(): number[];
    dispose(): void;
}
