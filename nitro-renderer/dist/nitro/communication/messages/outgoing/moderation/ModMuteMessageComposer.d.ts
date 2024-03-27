import { IMessageComposer } from '../../../../../api';
export declare class ModMuteMessageComposer implements IMessageComposer<ConstructorParameters<typeof ModMuteMessageComposer>> {
    private _data;
    constructor(k: number, arg2: string, arg3: number, arg4?: number);
    getMessageArray(): [k: number, arg2: string, arg3: number, arg4?: number];
    dispose(): void;
}
