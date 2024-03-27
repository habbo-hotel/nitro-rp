import { IMessageComposer } from '../../../../../api';
export declare class GetPetCommandsComposer implements IMessageComposer<ConstructorParameters<typeof GetPetCommandsComposer>> {
    private _data;
    constructor(petId: number);
    getMessageArray(): [petId: number];
    dispose(): void;
}
