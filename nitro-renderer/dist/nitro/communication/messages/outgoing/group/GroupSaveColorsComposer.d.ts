import { IMessageComposer } from '../../../../../api';
export declare class GroupSaveColorsComposer implements IMessageComposer<ConstructorParameters<typeof GroupSaveColorsComposer>> {
    private _data;
    constructor(groupId: number, colorA: number, colorB: number);
    getMessageArray(): [groupId: number, colorA: number, colorB: number];
    dispose(): void;
}
