import { IMessageComposer } from '../../../../../../api';
export declare class CancelPetBreedingComposer implements IMessageComposer<ConstructorParameters<typeof CancelPetBreedingComposer>> {
    private _data;
    constructor(itemId: number);
    getMessageArray(): [itemId: number];
    dispose(): void;
}
