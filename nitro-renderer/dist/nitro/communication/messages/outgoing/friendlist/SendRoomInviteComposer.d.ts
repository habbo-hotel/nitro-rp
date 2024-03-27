import { IMessageComposer } from '../../../../../api';
export declare class SendRoomInviteComposer implements IMessageComposer<any> {
    private _data;
    constructor(message: string, userIds: number[]);
    getMessageArray(): any;
    dispose(): void;
}
