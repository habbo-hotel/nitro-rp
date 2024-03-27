import { IMessageComposer } from '../../../../../api';
export declare class RoomTextSearchMessageComposer implements IMessageComposer<ConstructorParameters<typeof RoomTextSearchMessageComposer>> {
    private _data;
    constructor(k: string);
    getMessageArray(): [k: string];
    dispose(): void;
}
