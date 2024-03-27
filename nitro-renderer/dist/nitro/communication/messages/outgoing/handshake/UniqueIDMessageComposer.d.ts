import { IMessageComposer } from '../../../../../api';
export declare class UniqueIDMessageComposer implements IMessageComposer<ConstructorParameters<typeof UniqueIDMessageComposer>> {
    private _data;
    constructor(machineId: string, fingerprint: string, flashVersion: string);
    getMessageArray(): [machineId: string, fingerprint: string, flashVersion: string];
    dispose(): void;
}
