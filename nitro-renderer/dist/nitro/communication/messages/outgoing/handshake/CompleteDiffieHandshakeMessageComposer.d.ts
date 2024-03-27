import { IMessageComposer } from '../../../../../api';
export declare class CompleteDiffieHandshakeMessageComposer implements IMessageComposer<ConstructorParameters<typeof CompleteDiffieHandshakeMessageComposer>> {
    private _data;
    constructor(publicKey: string);
    getMessageArray(): [publicKey: string];
    dispose(): void;
}
