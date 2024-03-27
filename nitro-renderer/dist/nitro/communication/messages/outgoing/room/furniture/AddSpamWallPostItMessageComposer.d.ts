import { IMessageComposer } from '../../../../../../api';
export declare class AddSpamWallPostItMessageComposer implements IMessageComposer<ConstructorParameters<typeof AddSpamWallPostItMessageComposer>> {
    private _data;
    constructor(itemId: number, location: string, colorHex: string, message: string);
    getMessageArray(): [itemId: number, location: string, colorHex: string, message: string];
    dispose(): void;
}
