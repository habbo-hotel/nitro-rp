import { IMessageComposer } from '../../../../../api';
export declare class ModToolPreferencesComposer implements IMessageComposer<ConstructorParameters<typeof ModToolPreferencesComposer>> {
    private _data;
    constructor(k: number, _arg_2: number, _arg_3: number, _arg_4: number);
    getMessageArray(): [k: number, _arg_2: number, _arg_3: number, _arg_4: number];
    dispose(): void;
}
