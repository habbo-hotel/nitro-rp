import { IMessageComposer } from '../../../../../../api';
export declare class ResetResolutionAchievementMessageComposer implements IMessageComposer<ConstructorParameters<typeof ResetResolutionAchievementMessageComposer>> {
    private _data;
    constructor(k: number);
    dispose(): void;
    getMessageArray(): [k: number];
}
