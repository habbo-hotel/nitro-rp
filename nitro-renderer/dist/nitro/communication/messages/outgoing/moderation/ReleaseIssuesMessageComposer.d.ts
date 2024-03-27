import { IMessageComposer } from '../../../../../api';
export declare class ReleaseIssuesMessageComposer implements IMessageComposer<number[]> {
    private _data;
    constructor(issueIds: number[]);
    getMessageArray(): number[];
    dispose(): void;
}
