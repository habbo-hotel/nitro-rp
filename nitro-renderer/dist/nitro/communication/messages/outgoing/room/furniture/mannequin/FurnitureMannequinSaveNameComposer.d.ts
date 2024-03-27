import { IMessageComposer } from '../../../../../../../api';
export declare class FurnitureMannequinSaveNameComposer implements IMessageComposer<ConstructorParameters<typeof FurnitureMannequinSaveNameComposer>> {
    private _data;
    constructor(itemId: number, name: string);
    getMessageArray(): [itemId: number, name: string];
    dispose(): void;
}
