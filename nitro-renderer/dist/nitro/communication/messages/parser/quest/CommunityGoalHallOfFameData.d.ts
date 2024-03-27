import { IDisposable, IMessageDataWrapper } from '../../../../../api';
import { HallOfFameEntryData } from './HallOfFameEntryData';
export declare class CommunityGoalHallOfFameData implements IDisposable {
    private _goalCode;
    private _hof;
    constructor(wrapper: IMessageDataWrapper);
    dispose(): void;
    get disposed(): boolean;
    get hof(): HallOfFameEntryData[];
    get goalCode(): string;
}
