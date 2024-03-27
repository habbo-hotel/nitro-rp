import { IMessageComposer } from '../../../../../api';
export declare class ModAlertMessageComposer implements IMessageComposer<ConstructorParameters<typeof ModAlertMessageComposer>> {
    private _data;
    constructor(k: number, arg2: string, arg3: number, arg4?: number);
    getMessageArray(): [k: number, arg2: string, arg3: number, arg4?: number];
    dispose(): void;
}
