import { IDisposable, IMessageDataWrapper } from '../../../../../api';
export declare class PatternMatchData implements IDisposable {
    private _pattern;
    private _startIndex;
    private _endIndex;
    private _disposed;
    constructor(k: IMessageDataWrapper);
    dispose(): void;
    get disposed(): boolean;
    get pattern(): string;
    get startIndex(): number;
    get endIndex(): number;
}
