export declare class RoomEnterEffect {
    static STATE_NOT_INITIALIZED: number;
    static STATE_START_DELAY: number;
    static STATE_RUNNING: number;
    static STATE_OVER: number;
    private static _state;
    private static _visualizationOn;
    private static _currentDelta;
    private static _initializationTimeMs;
    private static _startDelayMs;
    private static _effectDurationMs;
    static init(delay: number, duration: number): void;
    static turnVisualizationOn(): void;
    static turnVisualizationOff(): void;
    static isVisualizationOn(): boolean;
    static isRunning(): boolean;
    static getDelta(k?: number, _arg_2?: number): number;
    static get totalRunningTime(): number;
}
