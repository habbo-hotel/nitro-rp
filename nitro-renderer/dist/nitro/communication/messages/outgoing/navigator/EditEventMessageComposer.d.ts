import { IMessageComposer } from '../../../../../api';
export declare class EditEventMessageComposer implements IMessageComposer<ConstructorParameters<typeof EditEventMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: string, _arg_3: string);
    getMessageArray(): [k: number, _arg_2: string, _arg_3: string];
    dispose(): void;
}
