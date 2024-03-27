import { IMessageComposer } from '../../../../../api';
export declare class RemoveJukeboxDiskComposer implements IMessageComposer<ConstructorParameters<typeof RemoveJukeboxDiskComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
