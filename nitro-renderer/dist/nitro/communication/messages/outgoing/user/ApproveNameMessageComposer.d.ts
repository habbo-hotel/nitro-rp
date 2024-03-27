import { IMessageComposer } from '../../../../../api';
export declare class ApproveNameMessageComposer implements IMessageComposer<ConstructorParameters<typeof ApproveNameMessageComposer>> {
    private _data;
    constructor(name: string, type: number);
    getMessageArray(): [name: string, type: number];
    dispose(): void;
}
