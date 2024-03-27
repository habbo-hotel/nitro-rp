import { IMessageComposer } from '../../../../../api';
export declare class CallForHelpFromSelfieMessageComposer implements IMessageComposer<ConstructorParameters<typeof CallForHelpFromSelfieMessageComposer>> {
    private _data;
    constructor(k: string, _arg_2: number, _arg_3: number, _arg_4: string, _arg_5: number);
    getMessageArray(): [k: string, _arg_2: number, _arg_3: number, _arg_4: string, _arg_5: number];
    dispose(): void;
}
