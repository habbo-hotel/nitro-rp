import { IMessageComposer } from '../../../../../api';
export declare class CraftSecretComposer implements IMessageComposer<number[]> {
    private _data;
    constructor(k: number, _arg_2: number[]);
    getMessageArray(): number[];
    dispose(): void;
}
