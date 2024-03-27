import { INitroCommunicationManager, INitroLocalizationManager } from '../../api';
import { NitroManager } from '../../core';
export declare class NitroLocalizationManager extends NitroManager implements INitroLocalizationManager {
    private _communication;
    private _definitions;
    private _parameters;
    private _badgePointLimits;
    private _romanNumerals;
    private _pendingUrls;
    constructor(communication: INitroCommunicationManager);
    protected onInit(): void;
    private loadNextLocalization;
    loadLocalizationFromURL(url: string): void;
    private onLocalizationLoaded;
    private onLocalizationFailed;
    private parseLocalization;
    private onBadgePointLimitsEvent;
    getBadgePointLimit(badge: string): number;
    setBadgePointLimit(badge: string, point: number): void;
    getRomanNumeral(number: number): string;
    getPreviousLevelBadgeId(badgeName: string): string;
    hasValue(key: string): boolean;
    getValue(key: string, doParams?: boolean): string;
    getValueWithParameter(key: string, parameter: string, replacement: string): string;
    getValueWithParameters(key: string, parameters: string[], replacements: string[]): string;
    setValue(key: string, value: string): void;
    registerParameter(key: string, parameter: string, value: string): void;
    getBadgeName(key: string): string;
    getBadgeDesc(key: string): string;
    private getExistingKey;
    private fixBadLocalization;
}
