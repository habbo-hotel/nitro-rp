import { IMessageComposer } from '../../../../../../../api';
export declare class ApplyTonerComposer implements IMessageComposer<ConstructorParameters<typeof ApplyTonerComposer>> {
    private _data;
    constructor(k: number, arg2: number, arg3: number, arg4: number);
    getMessageArray(): [k: number, arg2: number, arg3: number, arg4: number];
    dispose(): void;
}
