import { IMessageComposer } from '../../../../../../api';
export declare class Game2GetWeeklyFriendsLeaderboardComposer implements IMessageComposer<ConstructorParameters<typeof Game2GetWeeklyFriendsLeaderboardComposer>> {
    private _data;
    constructor(k: number, _arg_2: number, _arg_3: number, _arg_4: number, _arg_5: number, _arg_6: number);
    dispose(): void;
    getMessageArray(): [k: number, _arg_2: number, _arg_3: number, _arg_4: number, _arg_5: number, _arg_6: number];
}
