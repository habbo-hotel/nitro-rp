import { IMessageComposer } from '../../../../../../api';
export declare class OpenPetPackageMessageComposer implements IMessageComposer<ConstructorParameters<typeof OpenPetPackageMessageComposer>> {
    private _data;
    constructor(objectId: number, petName: string);
    getMessageArray(): [objectId: number, petName: string];
    dispose(): void;
}
