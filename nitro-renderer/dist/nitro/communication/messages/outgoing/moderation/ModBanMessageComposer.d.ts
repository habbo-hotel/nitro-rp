import { IMessageComposer } from '../../../../../api';
export declare class ModBanMessageComposer implements IMessageComposer<ConstructorParameters<typeof ModBanMessageComposer>> {
    static readonly NO_ISSUE_ID = -1;
    private _data;
    constructor(k: number, arg2: string, arg3: number, arg4: number, arg5: boolean, arg6?: number);
    getMessageArray(): [k: number, arg2: string, arg3: number, arg4: number, arg5: boolean, arg6?: number];
    dispose(): void;
}
