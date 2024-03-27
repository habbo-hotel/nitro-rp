import { IMessageComposer } from '../../../../../api';
export declare class CallForHelpFromIMMessageComposer implements IMessageComposer<any> {
    private _data;
    constructor(message: string, topicId: number, reportedUserId: number, chatEntries: (string | number)[]);
    getMessageArray(): any;
    dispose(): void;
}
