import { IMessageComposer } from '../../../../../api';
export declare class PopularRoomsSearchMessageComposer implements IMessageComposer<ConstructorParameters<typeof PopularRoomsSearchMessageComposer>> {
    private _data;
    constructor(k: string, _arg_2: number);
    getMessageArray(): [k: string, _arg_2: number];
    dispose(): void;
}
