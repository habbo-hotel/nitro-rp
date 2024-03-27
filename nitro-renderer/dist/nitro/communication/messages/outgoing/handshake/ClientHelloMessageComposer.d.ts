import { IMessageComposer } from '../../../../../api';
export declare class ClientHelloMessageComposer implements IMessageComposer<ConstructorParameters<typeof ClientHelloMessageComposer>> {
    private _data;
    constructor(releaseVersion: string, type: string, platform: number, category: number);
    getMessageArray(): [releaseVersion: string, type: string, platform: number, category: number];
    dispose(): void;
}
