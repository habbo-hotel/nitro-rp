import { IMessageComposer } from '../../../../../api';
export declare class ApplySnapshotMessageComposer implements IMessageComposer<ConstructorParameters<typeof ApplySnapshotMessageComposer>> {
    private _data;
    constructor(id: number);
    getMessageArray(): [id: number];
    dispose(): void;
}
