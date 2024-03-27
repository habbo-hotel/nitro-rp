import { IMessageComposer } from '../../../../../api';
export declare class UpdateTriggerMessageComposer implements IMessageComposer<unknown[]> {
    private _data;
    constructor(id: number, ints: number[], string: string, stuffs: number[], selectionCode: number);
    getMessageArray(): unknown[];
    dispose(): void;
}
