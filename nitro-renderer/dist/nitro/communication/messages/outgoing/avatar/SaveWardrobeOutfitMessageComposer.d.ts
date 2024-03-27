import { IMessageComposer } from '../../../../../api';
export declare class SaveWardrobeOutfitMessageComposer implements IMessageComposer<ConstructorParameters<typeof SaveWardrobeOutfitMessageComposer>> {
    private _data;
    constructor(slotId: number, look: string, gender: string);
    getMessageArray(): [slotId: number, look: string, gender: string];
    dispose(): void;
}
