import { IMessageComposer } from '../../../../../api';
export declare class GetCfhStatusMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetCfhStatusMessageComposer>> {
    private _data;
    constructor(k: boolean);
    getMessageArray(): [k: boolean];
    dispose(): void;
}
