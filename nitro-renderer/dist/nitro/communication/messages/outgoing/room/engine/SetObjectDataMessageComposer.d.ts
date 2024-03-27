import { IMessageComposer } from '../../../../../../api';
export declare class SetObjectDataMessageComposer implements IMessageComposer<any[]> {
    private _data;
    constructor(objectId: number, data: Map<string, string>);
    getMessageArray(): any[];
    dispose(): void;
}
