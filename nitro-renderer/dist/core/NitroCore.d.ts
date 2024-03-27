import { ICommunicationManager, IConfigurationManager, INitroCore } from '../api';
import { Disposable } from './common';
export declare class NitroCore extends Disposable implements INitroCore {
    private _configuration;
    private _communication;
    constructor();
    protected onDispose(): void;
    get configuration(): IConfigurationManager;
    get communication(): ICommunicationManager;
}
