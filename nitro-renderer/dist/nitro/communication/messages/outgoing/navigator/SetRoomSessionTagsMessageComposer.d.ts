import { IMessageComposer } from '../../../../../api';
export declare class SetRoomSessionTagsMessageComposer implements IMessageComposer<ConstructorParameters<typeof SetRoomSessionTagsMessageComposer>> {
    private _data;
    constructor(k: string, _arg_2: string);
    getMessageArray(): [k: string, _arg_2: string];
    dispose(): void;
}
