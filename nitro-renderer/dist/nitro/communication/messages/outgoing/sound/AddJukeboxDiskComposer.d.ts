import { IMessageComposer } from '../../../../../api';
export declare class AddJukeboxDiskComposer implements IMessageComposer<ConstructorParameters<typeof AddJukeboxDiskComposer>> {
    private _data;
    constructor(k: number, _arg2: number);
    getMessageArray(): [k: number, _arg2: number];
    dispose(): void;
}
