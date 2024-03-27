import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionVoteEvent extends RoomSessionEvent {
    static VOTE_QUESTION: string;
    static VOTE_RESULT: string;
    private _question;
    private _choices;
    private _SafeStr_7651;
    private _SafeStr_7654;
    constructor(_arg_1: string, _arg_2: IRoomSession, _arg_3: string, _arg_4: string[], _arg_5?: string[], _arg_6?: number);
    get question(): string;
    get choices(): string[];
    get _SafeStr_4173(): string[];
    get _SafeStr_4174(): number;
}
