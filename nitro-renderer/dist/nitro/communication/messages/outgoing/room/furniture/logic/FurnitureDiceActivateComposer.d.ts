import { IMessageComposer } from '../../../../../../../api';
export declare class FurnitureDiceActivateComposer implements IMessageComposer<ConstructorParameters<typeof FurnitureDiceActivateComposer>> {
    private _data;
    constructor(itemId: number);
    getMessageArray(): [itemId: number];
    dispose(): void;
}
