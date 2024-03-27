import { IMessageComposer } from '../../../../../api';
export declare class SendMessageComposer implements IMessageComposer<ConstructorParameters<typeof SendMessageComposer>> {
    private _data;
    constructor(userId: number, message: string);
    getMessageArray(): [userId: number, message: string];
    dispose(): void;
}
