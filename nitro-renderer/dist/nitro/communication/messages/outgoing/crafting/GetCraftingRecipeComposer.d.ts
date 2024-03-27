import { IMessageComposer } from '../../../../../api';
export declare class GetCraftingRecipeComposer implements IMessageComposer<ConstructorParameters<typeof GetCraftingRecipeComposer>> {
    private _data;
    constructor(k: string);
    getMessageArray(): [k: string];
    dispose(): void;
}
