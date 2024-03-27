import { IMessageComposer } from '../../../../../../api';
export declare class Game2GetAccountGameStatusMessageComposer implements IMessageComposer<ConstructorParameters<typeof Game2GetAccountGameStatusMessageComposer>> {
    private _data;
    constructor(k: number);
    dispose(): void;
    getMessageArray(): [k: number];
}
