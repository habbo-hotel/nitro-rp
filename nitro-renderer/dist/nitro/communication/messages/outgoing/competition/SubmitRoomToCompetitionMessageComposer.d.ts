import { IMessageComposer } from '../../../../../api';
export declare class SubmitRoomToCompetitionMessageComposer implements IMessageComposer<ConstructorParameters<typeof SubmitRoomToCompetitionMessageComposer>> {
    static readonly CONFIRM_LEVEL_NOT_ACCEPTED = 0;
    static readonly CONFIRM_LEVEL_NOT_SUBMITTED = 1;
    static readonly CONFIRM_LEVEL_NOT_CONFIRMED = 2;
    static readonly CONFIRM_LEVEL_COMMIT = 3;
    private _data;
    constructor(k: string, _arg_2: number);
    getMessageArray(): [k: string, _arg_2: number];
    dispose(): void;
}
