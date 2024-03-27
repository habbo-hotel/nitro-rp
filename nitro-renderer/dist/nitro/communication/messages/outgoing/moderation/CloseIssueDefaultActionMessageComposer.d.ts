import { IMessageComposer } from '../../../../../api';
export declare class CloseIssueDefaultActionMessageComposer implements IMessageComposer<number[]> {
    private _data;
    constructor(k: number, issueIds: number[], _arg_2: number);
    getMessageArray(): number[];
    dispose(): void;
}
