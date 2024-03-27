import { IMessageComposer } from '../../../../../../api';
export declare class PetSelectedMessageComposer implements IMessageComposer<ConstructorParameters<typeof PetSelectedMessageComposer>> {
    private _data;
    constructor(petId: number);
    getMessageArray(): [petId: number];
    dispose(): void;
}
