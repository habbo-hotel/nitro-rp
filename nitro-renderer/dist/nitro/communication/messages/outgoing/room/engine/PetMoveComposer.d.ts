import { IMessageComposer } from '../../../../../../api';
export declare class PetMoveComposer implements IMessageComposer<ConstructorParameters<typeof PetMoveComposer>> {
    private _data;
    constructor(petId: number, x: number, y: number, direction: number);
    getMessageArray(): [petId: number, x: number, y: number, direction: number];
    dispose(): void;
}
