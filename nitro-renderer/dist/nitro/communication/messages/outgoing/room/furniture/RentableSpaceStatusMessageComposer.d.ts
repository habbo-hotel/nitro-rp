import { IMessageComposer } from '../../../../../../api';
export declare class RentableSpaceStatusMessageComposer implements IMessageComposer<ConstructorParameters<typeof RentableSpaceStatusMessageComposer>> {
    private _data;
    constructor(itemId: number);
    getMessageArray(): [itemId: number];
    dispose(): void;
}
