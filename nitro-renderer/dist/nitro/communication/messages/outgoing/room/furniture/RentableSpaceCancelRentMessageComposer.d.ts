import { IMessageComposer } from '../../../../../../api';
export declare class RentableSpaceCancelRentMessageComposer implements IMessageComposer<ConstructorParameters<typeof RentableSpaceCancelRentMessageComposer>> {
    private _data;
    constructor(itemId: number);
    getMessageArray(): [itemId: number];
    dispose(): void;
}
