import { IMessageComposer } from '../../../../../api';
export declare class DefaultSanctionMessageComposer implements IMessageComposer<ConstructorParameters<typeof DefaultSanctionMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: number, _arg_3: string, _arg_4?: number);
    getMessageArray(): [k: number, _arg_2: number, _arg_3: string, _arg_4?: number];
    dispose(): void;
}
