import { IMessageComposer } from '../../../../../api';
export declare class UpdateThreadMessageComposer implements IMessageComposer<ConstructorParameters<typeof UpdateThreadMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: number, _arg_3: boolean, _arg_4: boolean);
    getMessageArray(): [k: number, _arg_2: number, _arg_3: boolean, _arg_4: boolean];
    dispose(): void;
}
