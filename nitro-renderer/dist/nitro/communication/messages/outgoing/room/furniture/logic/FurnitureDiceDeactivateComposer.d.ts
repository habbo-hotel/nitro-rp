import { IMessageComposer } from '../../../../../../../api';
export declare class FurnitureDiceDeactivateComposer implements IMessageComposer<ConstructorParameters<typeof FurnitureDiceDeactivateComposer>> {
    private _data;
    constructor(itemId: number);
    getMessageArray(): [itemId: number];
    dispose(): void;
}
