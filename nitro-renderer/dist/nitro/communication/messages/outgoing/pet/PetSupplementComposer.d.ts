import { IMessageComposer } from '../../../../../api';
export declare class PetSupplementComposer implements IMessageComposer<ConstructorParameters<typeof PetSupplementComposer>> {
    private _data;
    constructor(petId: number, supplement: number);
    getMessageArray(): [petId: number, supplement: number];
    dispose(): void;
}
