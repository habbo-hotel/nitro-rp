import { IMessageComposer } from '../../../../../../api';
export declare class GetRentOrBuyoutOfferMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetRentOrBuyoutOfferMessageComposer>> {
    private _data;
    constructor(isWall: boolean, furnitureFullName: string, isBuyout: boolean);
    getMessageArray(): [isWall: boolean, furnitureFullName: string, isBuyout: boolean];
    dispose(): void;
}
