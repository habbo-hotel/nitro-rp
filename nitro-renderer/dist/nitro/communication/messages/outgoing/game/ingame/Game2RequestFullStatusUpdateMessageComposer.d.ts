import { IMessageComposer } from '../../../../../../api';
export declare class Game2RequestFullStatusUpdateMessageComposer implements IMessageComposer<ConstructorParameters<typeof Game2RequestFullStatusUpdateMessageComposer>> {
    private _data;
    constructor(k: number);
    dispose(): void;
    getMessageArray(): [k: number];
}
