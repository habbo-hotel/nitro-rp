import { IMessageComposer } from '../../../../../api';
export declare class GetCfhChatlogMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetCfhChatlogMessageComposer>> {
    private _data;
    constructor(issueId: number);
    getMessageArray(): [issueId: number];
    dispose(): void;
}
