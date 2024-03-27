import { IMessageComposer } from '../../../../../../api';
export declare class Game2GameChatMessageComposer implements IMessageComposer<ConstructorParameters<typeof Game2GameChatMessageComposer>> {
    private _data;
    constructor(chatLine: string);
    dispose(): void;
    getMessageArray(): [chatLine: string];
}
