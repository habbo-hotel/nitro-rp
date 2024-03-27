import { IMessageComposer } from '../../../../../api';
export declare class PickIssuesMessageComposer implements IMessageComposer<any> {
    private _data;
    constructor(issueIds: number[], retryEnabled: boolean, retryCount: number, message: string);
    getMessageArray(): any;
    dispose(): void;
}
