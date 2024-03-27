import { IMessageComposer } from '../../../../../api';
export declare class VersionCheckMessageComposer implements IMessageComposer<ConstructorParameters<typeof VersionCheckMessageComposer>> {
    private _data;
    constructor(clientID: number, clientURL: string, externalVariablesURL: string);
    getMessageArray(): [clientID: number, clientURL: string, externalVariablesURL: string];
    dispose(): void;
}
