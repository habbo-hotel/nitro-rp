import { IVector3D } from '../../../api';
export declare class RoomMapMaskData {
    private _masks;
    constructor();
    get masks(): {
        id: string;
        type: string;
        category: string;
        locations: IVector3D[];
    }[];
}
