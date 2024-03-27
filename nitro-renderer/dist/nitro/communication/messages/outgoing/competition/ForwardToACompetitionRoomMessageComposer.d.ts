import { IMessageComposer } from '../../../../../api';
export declare class ForwardToACompetitionRoomMessageComposer implements IMessageComposer<ConstructorParameters<typeof ForwardToACompetitionRoomMessageComposer>> {
    private _data;
    constructor(k: string, _arg_2: number);
    getMessageArray(): [k: string, _arg_2: number];
    dispose(): void;
}
