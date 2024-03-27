import { IMessageComposer } from '../../../../../api';
export declare class TogglePetBreedingComposer implements IMessageComposer<ConstructorParameters<typeof TogglePetBreedingComposer>> {
    private _data;
    constructor(petId: number);
    getMessageArray(): [petId: number];
    dispose(): void;
}
