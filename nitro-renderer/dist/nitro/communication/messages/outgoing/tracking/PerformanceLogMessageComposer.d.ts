import { IMessageComposer } from '../../../../../api';
export declare class PerformanceLogMessageComposer implements IMessageComposer<ConstructorParameters<typeof PerformanceLogMessageComposer>> {
    private _data;
    constructor(k: number, userAgent: string, flashVersion: string, operatingSystem: string, cpuArchitecture: string, isDebugger: boolean, totalMemory: number, _arg_8: number, gcCount: number, averageUpdateInterval: number, slowUpdateCount: number);
    getMessageArray(): [k: number, userAgent: string, flashVersion: string, operatingSystem: string, cpuArchitecture: string, isDebugger: boolean, totalMemory: number, _arg_8: number, gcCount: number, averageUpdateInterval: number, slowUpdateCount: number];
    dispose(): void;
}
