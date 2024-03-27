import { IObjectData } from '../../../../../../api';
export declare class ObjectData {
    private _id;
    private _state;
    private _data;
    constructor(id: number, state: number, objectData: IObjectData);
    get id(): number;
    get state(): number;
    get data(): IObjectData;
}
