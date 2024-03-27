import { IMessageComposer } from '../../../../../api';
export declare class RemovePetSaddleComposer implements IMessageComposer<ConstructorParameters<typeof RemovePetSaddleComposer>> {
    private _data;
    constructor(petId: number);
    getMessageArray(): [petId: number];
    dispose(): void;
}
