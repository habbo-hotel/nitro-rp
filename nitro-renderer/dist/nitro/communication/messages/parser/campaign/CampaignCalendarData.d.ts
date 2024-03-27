import { IMessageDataWrapper } from '../../../../../api';
export declare class CampaignCalendarData {
    private _campaignName;
    private _campaignImage;
    private _currentDay;
    private _campaignDays;
    private _openedDays;
    private _missedDays;
    parse(wrapper: IMessageDataWrapper): boolean;
    clone(): CampaignCalendarData;
    get campaignName(): string;
    set campaignName(name: string);
    get campaignImage(): string;
    set campaignImage(image: string);
    get currentDay(): number;
    set currentDay(day: number);
    get campaignDays(): number;
    set campaignDays(days: number);
    get openedDays(): number[];
    set openedDays(days: number[]);
    get missedDays(): number[];
    set missedDays(days: number[]);
}
