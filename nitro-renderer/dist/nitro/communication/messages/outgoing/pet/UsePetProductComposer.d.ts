import { IMessageComposer } from '../../../../../api';
export declare class UsePetProductComposer implements IMessageComposer<ConstructorParameters<typeof UsePetProductComposer>> {
    private _data;
    constructor(itemId: number, petId: number);
    getMessageArray(): [itemId: number, petId: number];
    dispose(): void;
}
