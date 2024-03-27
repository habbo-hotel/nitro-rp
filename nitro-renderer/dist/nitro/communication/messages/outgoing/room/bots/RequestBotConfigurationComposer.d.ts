import { IMessageComposer } from '../../../../../../api';
export declare class RequestBotCommandConfigurationComposer implements IMessageComposer<ConstructorParameters<typeof RequestBotCommandConfigurationComposer>> {
    private _data;
    constructor(botId: number, skillId: number);
    getMessageArray(): [botId: number, skillId: number];
    dispose(): void;
}
