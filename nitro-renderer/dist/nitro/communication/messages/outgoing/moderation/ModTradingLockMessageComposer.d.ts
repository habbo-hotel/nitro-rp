import { IMessageComposer } from '../../../../../api';
export declare class ModTradingLockMessageComposer implements IMessageComposer<ConstructorParameters<typeof ModTradingLockMessageComposer>> {
    private _data;
    constructor(k: number, arg2: string, arg3: number, arg4: number, arg5?: number);
    getMessageArray(): [k: number, arg2: string, arg3: number, arg4: number, arg5?: number];
    dispose(): void;
}
