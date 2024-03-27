import { IMessageComposer } from '../../../../../api';
export declare class RoomsWithHighestScoreSearchMessageComposer implements IMessageComposer<ConstructorParameters<typeof RoomsWithHighestScoreSearchMessageComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
