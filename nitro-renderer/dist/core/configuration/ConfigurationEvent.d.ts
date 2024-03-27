import { NitroEvent } from '../../events';
export declare class ConfigurationEvent extends NitroEvent {
    static LOADED: string;
    static FAILED: string;
    constructor(type: string);
}
