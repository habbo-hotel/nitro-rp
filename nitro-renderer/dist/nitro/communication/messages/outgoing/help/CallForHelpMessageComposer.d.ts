import { IMessageComposer } from '../../../../../api';
export declare class CallForHelpMessageComposer implements IMessageComposer<any> {
    private _data;
    constructor(message: string, topicIndex: number, reportedUserId: number, reportedRoomId: number, chatEntries: (string | number)[]);
    getMessageArray(): any;
    dispose(): void;
}
