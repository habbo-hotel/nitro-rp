import { IMessageComposer } from '../../../../../../api';
export declare class SetItemDataMessageComposer implements IMessageComposer<ConstructorParameters<typeof SetItemDataMessageComposer>> {
    private _data;
    constructor(itemId: number, colorHex: string, text: string);
    getMessageArray(): [itemId: number, colorHex: string, text: string];
    dispose(): void;
}
