import { IMessageComposer } from '../../../../../../api';
export declare class BotRemoveComposer implements IMessageComposer<ConstructorParameters<typeof BotRemoveComposer>> {
    private _data;
    constructor(botId: number);
    getMessageArray(): [botId: number];
    dispose(): void;
}
