import { IMessageComposer } from '../../../../../api';
export declare class SelectClubGiftComposer implements IMessageComposer<ConstructorParameters<typeof SelectClubGiftComposer>> {
    private _data;
    constructor(itemName: string);
    getMessageArray(): [itemName: string];
    dispose(): void;
}
