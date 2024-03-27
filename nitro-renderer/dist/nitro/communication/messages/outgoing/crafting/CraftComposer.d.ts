import { IMessageComposer } from '../../../../../api';
export declare class CraftComposer implements IMessageComposer<ConstructorParameters<typeof CraftComposer>> {
    private _data;
    constructor(k: number, _arg_2: string);
    getMessageArray(): [k: number, _arg_2: string];
    dispose(): void;
}
