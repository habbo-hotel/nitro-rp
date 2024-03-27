import { IMessageComposer } from '../../../../../api';
export declare class GetThreadMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetThreadMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: number);
    getMessageArray(): [k: number, _arg_2: number];
    dispose(): void;
}
