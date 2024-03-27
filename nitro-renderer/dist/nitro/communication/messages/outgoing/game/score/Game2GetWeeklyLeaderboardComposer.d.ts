import { IMessageComposer } from '../../../../../../api';
export declare class Game2GetWeeklyLeaderboardComposer implements IMessageComposer<ConstructorParameters<typeof Game2GetWeeklyLeaderboardComposer>> {
    private _data;
    constructor(k: number, _arg_2: number, _arg_3: number, _arg_4: number, _arg_5: number, _arg_6: number);
    dispose(): void;
    getMessageArray(): [k: number, _arg_2: number, _arg_3: number, _arg_4: number, _arg_5: number, _arg_6: number];
}
