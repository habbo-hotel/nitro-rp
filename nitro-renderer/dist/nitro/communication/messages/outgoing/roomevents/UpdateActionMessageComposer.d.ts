import { IMessageComposer } from '../../../../../api';
export declare class UpdateActionMessageComposer implements IMessageComposer<unknown[]> {
    private _data;
    constructor(id: number, ints: number[], string: string, stuffs: number[], delay: number, selectionCode: number);
    getMessageArray(): unknown[];
    dispose(): void;
}
