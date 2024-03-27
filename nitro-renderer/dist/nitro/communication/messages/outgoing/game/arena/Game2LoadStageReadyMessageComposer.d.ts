import { IMessageComposer } from '../../../../../../api';
export declare class Game2LoadStageReadyMessageComposer implements IMessageComposer<ConstructorParameters<typeof Game2LoadStageReadyMessageComposer>> {
    private _data;
    constructor(k: number);
    dispose(): void;
    getMessageArray(): [k: number];
}
