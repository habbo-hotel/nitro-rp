import { IMessageComposer } from '../../../../../../api';
export declare class PetRemoveComposer implements IMessageComposer<ConstructorParameters<typeof PetRemoveComposer>> {
    private _data;
    constructor(petId: number);
    getMessageArray(): [petId: number];
    dispose(): void;
}
