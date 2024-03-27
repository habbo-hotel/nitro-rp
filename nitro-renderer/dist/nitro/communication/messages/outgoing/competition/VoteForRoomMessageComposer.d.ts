import { IMessageComposer } from '../../../../../api';
export declare class VoteForRoomMessageComposer implements IMessageComposer<ConstructorParameters<typeof VoteForRoomMessageComposer>> {
    private _data;
    constructor(k: string);
    getMessageArray(): [k: string];
    dispose(): void;
}
