import { IConfigurationManager } from '../../api';
import { NitroManager } from '../common';
export declare class ConfigurationManager extends NitroManager implements IConfigurationManager {
    private _definitions;
    private _config;
    private _pendingUrls;
    private _missingKeys;
    constructor();
    protected onInit(): void;
    private loadNextConfiguration;
    loadConfigurationFromUrl(url: string): void;
    private onConfigurationLoaded;
    private onConfigurationFailed;
    private dispatchConfigurationEvent;
    getDefaultConfig(): {
        [index: string]: any;
    };
}
