import { IMessageComposer } from '../../../../../api';
export declare class ForwardToRandomCompetitionRoomMessageComposer implements IMessageComposer<ConstructorParameters<typeof ForwardToRandomCompetitionRoomMessageComposer>> {
    private _data;
    constructor(k: string);
    getMessageArray(): [k: string];
    dispose(): void;
}
