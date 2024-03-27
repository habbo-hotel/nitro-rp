import { IMessageComposer } from '../../../../../api';
export declare class CompetitionRoomsSearchMessageComposer implements IMessageComposer<ConstructorParameters<typeof CompetitionRoomsSearchMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: number);
    getMessageArray(): [k: number, _arg_2: number];
    dispose(): void;
}
