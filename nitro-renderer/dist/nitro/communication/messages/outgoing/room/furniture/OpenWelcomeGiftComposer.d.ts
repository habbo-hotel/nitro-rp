import { IMessageComposer } from '../../../../../../api';
export declare class OpenWelcomeGiftComposer implements IMessageComposer<ConstructorParameters<typeof OpenWelcomeGiftComposer>> {
    private _data;
    constructor(furniId: number);
    getMessageArray(): [furniId: number];
    dispose(): void;
}
