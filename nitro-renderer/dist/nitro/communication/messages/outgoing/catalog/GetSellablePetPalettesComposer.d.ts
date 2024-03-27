import { IMessageComposer } from '../../../../../api';
export declare class GetSellablePetPalettesComposer implements IMessageComposer<ConstructorParameters<typeof GetSellablePetPalettesComposer>> {
    private _data;
    constructor(name: string);
    getMessageArray(): [name: string];
    dispose(): void;
}
