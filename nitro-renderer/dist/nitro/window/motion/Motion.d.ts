export declare class Motion {
    protected _target: HTMLElement;
    protected _running: boolean;
    protected _complete: boolean;
    protected _tag: string;
    constructor(target: HTMLElement);
    get running(): boolean;
    get complete(): boolean;
    set target(k: HTMLElement);
    get target(): HTMLElement;
    set tag(k: string);
    get tag(): string;
    start(): void;
    update(k: number): void;
    stop(): void;
    tick(k: number): void;
}
