import { IMessageComposer } from '../../../../../../api';
export declare class BotPlaceComposer implements IMessageComposer<ConstructorParameters<typeof BotPlaceComposer>> {
    private _data;
    constructor(botId: number, x: number, y: number);
    getMessageArray(): [botId: number, x: number, y: number];
    dispose(): void;
}
