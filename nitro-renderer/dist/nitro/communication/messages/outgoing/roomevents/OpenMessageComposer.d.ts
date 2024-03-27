import { IMessageComposer } from '../../../../../api';
export declare class OpenMessageComposer implements IMessageComposer<ConstructorParameters<typeof OpenMessageComposer>> {
    private _data;
    constructor(id: number);
    getMessageArray(): [id: number];
    dispose(): void;
}
