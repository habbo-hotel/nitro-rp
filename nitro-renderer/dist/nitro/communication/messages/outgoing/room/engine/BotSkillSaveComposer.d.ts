import { IMessageComposer } from '../../../../../../api';
export declare class BotSkillSaveComposer implements IMessageComposer<ConstructorParameters<typeof BotSkillSaveComposer>> {
    private _data;
    constructor(botId: number, skill: number, data: string);
    getMessageArray(): [botId: number, skill: number, data: string];
    dispose(): void;
}
