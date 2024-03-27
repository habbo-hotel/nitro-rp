import { IMessageComposer } from '../../../../../../api';
export declare class GetGameStatusMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetGameStatusMessageComposer>> {
    private _data;
    constructor(k: number);
    dispose(): void;
    getMessageArray(): [k: number];
}
