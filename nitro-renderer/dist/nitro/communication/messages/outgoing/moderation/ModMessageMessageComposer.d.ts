import { IMessageComposer } from '../../../../../api';
export declare class ModMessageMessageComposer implements IMessageComposer<any> {
    private _data;
    constructor(k: number, arg2: string, arg3: number, arg4?: number);
    getMessageArray(): any[];
    dispose(): void;
}
