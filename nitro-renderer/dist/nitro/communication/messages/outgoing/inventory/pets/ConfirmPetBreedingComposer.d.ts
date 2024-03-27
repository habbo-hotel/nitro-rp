import { IMessageComposer } from '../../../../../../api';
export declare class ConfirmPetBreedingComposer implements IMessageComposer<ConstructorParameters<typeof ConfirmPetBreedingComposer>> {
    private _data;
    constructor(itemId: number, name: string, petOneId: number, petTwoId: number);
    getMessageArray(): [itemId: number, name: string, petOneId: number, petTwoId: number];
    dispose(): void;
}
