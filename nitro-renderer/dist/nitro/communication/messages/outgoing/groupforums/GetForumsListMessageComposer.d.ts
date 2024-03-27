import { IMessageComposer } from '../../../../../api';
export declare class GetForumsListMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetForumsListMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: number, _arg_3: number);
    getMessageArray(): [k: number, _arg_2: number, _arg_3: number];
    dispose(): void;
}
