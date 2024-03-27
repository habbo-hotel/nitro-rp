import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { Game2WeeklyLeaderboardParser } from '../../../parser';
export declare class WeeklyCompetitiveFriendsLeaderboardEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): Game2WeeklyLeaderboardParser;
}
