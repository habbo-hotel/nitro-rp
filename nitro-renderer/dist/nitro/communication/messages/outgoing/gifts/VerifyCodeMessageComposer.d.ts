import { IMessageComposer } from '../../../../../api';
export declare class VerifyCodeMessageComposer implements IMessageComposer<ConstructorParameters<typeof VerifyCodeMessageComposer>> {
    private _data;
    constructor(k: string);
    getMessageArray(): [k: string];
    dispose(): void;
}
