import { IMessageComposer } from '../../../../../../api';
export declare class FurnitureGroupInfoComposer implements IMessageComposer<ConstructorParameters<typeof FurnitureGroupInfoComposer>> {
    private _data;
    constructor(objectId: number, guildId: number);
    getMessageArray(): [objectId: number, guildId: number];
    dispose(): void;
}
