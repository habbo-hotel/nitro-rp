import { IMessageComposer } from '../../../../../../api';
export declare class ExtendRentOrBuyoutFurniMessageComposer implements IMessageComposer<ConstructorParameters<typeof ExtendRentOrBuyoutFurniMessageComposer>> {
    private _data;
    constructor(isWall: boolean, roomInstanceId: number, isBuyout: boolean);
    getMessageArray(): [isWall: boolean, roomInstanceId: number, isBuyout: boolean];
    dispose(): void;
}
