import { IMessageComposer } from '../../../../../../api';
export declare class BreedPetsMessageComposer implements IMessageComposer<ConstructorParameters<typeof BreedPetsMessageComposer>> {
    static readonly STATE_START: number;
    static readonly STATE_CANCEL: number;
    static readonly STATE_ACCEPT: number;
    private _data;
    constructor(state: number, petOneId: number, petTwoId: number);
    getMessageArray(): [state: number, petOneId: number, petTwoId: number];
    dispose(): void;
}
