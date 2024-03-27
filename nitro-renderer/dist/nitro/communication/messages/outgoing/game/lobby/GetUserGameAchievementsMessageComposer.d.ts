import { IMessageComposer } from '../../../../../../api';
export declare class GetUserGameAchievementsMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetUserGameAchievementsMessageComposer>> {
    private _data;
    constructor(k: number);
    dispose(): void;
    getMessageArray(): [k: number];
}
