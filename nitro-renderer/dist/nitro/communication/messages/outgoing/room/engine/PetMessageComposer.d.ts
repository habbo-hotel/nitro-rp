import { IMessageComposer } from '../../../../../../api';
export declare class PetMessageComposer implements IMessageComposer<ConstructorParameters<typeof PetMessageComposer>> {
    private _data;
    constructor(id: number);
    getMessageArray(): [id: number];
    dispose(): void;
}
