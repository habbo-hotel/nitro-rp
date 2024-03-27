import { IMessageComposer } from '../../../../../../api';
export declare class RoomDoorbellAccessComposer implements IMessageComposer<ConstructorParameters<typeof RoomDoorbellAccessComposer>> {
    private _data;
    constructor(user: string, allowedEntry: boolean);
    getMessageArray(): [user: string, allowedEntry: boolean];
    dispose(): void;
}
