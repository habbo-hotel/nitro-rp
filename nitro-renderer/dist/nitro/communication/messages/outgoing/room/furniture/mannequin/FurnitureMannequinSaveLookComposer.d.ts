import { IMessageComposer } from '../../../../../../../api';
export declare class FurnitureMannequinSaveLookComposer implements IMessageComposer<ConstructorParameters<typeof FurnitureMannequinSaveLookComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
