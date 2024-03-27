import { IMessageComposer } from '../../../../../api';
export declare class RequestPetInfoComposer implements IMessageComposer<ConstructorParameters<typeof RequestPetInfoComposer>> {
    private _data;
    constructor(petId: number);
    getMessageArray(): [petId: number];
    dispose(): void;
}
