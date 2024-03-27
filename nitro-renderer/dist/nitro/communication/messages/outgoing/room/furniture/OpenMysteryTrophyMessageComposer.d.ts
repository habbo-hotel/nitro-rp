import { IMessageComposer } from '../../../../../../api';
export declare class OpenMysteryTrophyMessageComposer implements IMessageComposer<ConstructorParameters<typeof OpenMysteryTrophyMessageComposer>> {
    private _data;
    constructor(objectId: number, text: string);
    getMessageArray(): [objectId: number, text: string];
    dispose(): void;
}
