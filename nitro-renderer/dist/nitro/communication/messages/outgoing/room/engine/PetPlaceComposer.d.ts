import { IMessageComposer } from '../../../../../../api';
export declare class PetPlaceComposer implements IMessageComposer<ConstructorParameters<typeof PetPlaceComposer>> {
    private _data;
    constructor(petId: number, x: number, y: number);
    getMessageArray(): [petId: number, x: number, y: number];
    dispose(): void;
}
