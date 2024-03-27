import { IMessageComposer } from '../../../../../../api';
export declare class GetResolutionAchievementsMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetResolutionAchievementsMessageComposer>> {
    private _data;
    constructor(objectId: number, achievementId: number);
    getMessageArray(): [objectId: number, achievementId: number];
    dispose(): void;
}
