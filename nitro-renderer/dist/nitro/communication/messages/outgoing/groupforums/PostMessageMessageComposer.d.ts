import { IMessageComposer } from '../../../../../api';
export declare class PostMessageMessageComposer implements IMessageComposer<ConstructorParameters<typeof PostMessageMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: number, _arg_3: string, _arg_4: string);
    getMessageArray(): [k: number, _arg_2: number, _arg_3: string, _arg_4: string];
    dispose(): void;
}
