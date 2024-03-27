import { IMessageComposer } from '../../../../../api';
export declare class PetMountComposer implements IMessageComposer<ConstructorParameters<typeof PetMountComposer>> {
    private _data;
    constructor(petId: number, flag: boolean);
    getMessageArray(): [petId: number, flag: boolean];
    dispose(): void;
}
