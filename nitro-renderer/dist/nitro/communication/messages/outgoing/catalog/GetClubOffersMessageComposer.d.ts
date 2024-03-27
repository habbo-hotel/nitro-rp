import { IMessageComposer } from '../../../../../api';
export declare class GetClubOffersMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetClubOffersMessageComposer>> {
    private _data;
    constructor(offerId: number);
    getMessageArray(): [offerId: number];
    dispose(): void;
}
