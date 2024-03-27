import { IMessageComposer } from '../../../../../../api';
export declare class GameUnloadedMessageComposer implements IMessageComposer<ConstructorParameters<typeof GameUnloadedMessageComposer>> {
    private _data;
    constructor(k: number);
    dispose(): void;
    getMessageArray(): [k: number];
}
