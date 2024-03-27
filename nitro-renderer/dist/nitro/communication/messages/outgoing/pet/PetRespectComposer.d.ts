import { IMessageComposer } from '../../../../../api';
export declare class PetRespectComposer implements IMessageComposer<ConstructorParameters<typeof PetRespectComposer>> {
    private _data;
    constructor(petId: number);
    getMessageArray(): [petId: number];
    dispose(): void;
}
