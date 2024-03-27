import { IMessageComposer } from '../../../../../../api';
export declare class RentableSpaceRentMessageComposer implements IMessageComposer<ConstructorParameters<typeof RentableSpaceRentMessageComposer>> {
    private _data;
    constructor(itemId: number);
    getMessageArray(): [itemId: number];
    dispose(): void;
}
