import { IMessageComposer } from '../../../../../api';
export declare class TogglePetRidingComposer implements IMessageComposer<ConstructorParameters<typeof TogglePetRidingComposer>> {
    private _data;
    constructor(petId: number);
    getMessageArray(): [petId: number];
    dispose(): void;
}
