export interface ISongInfo {
    get id(): number;
    get diskId(): number;
    set diskId(id: number);
    get length(): number;
    get name(): string;
    get creator(): string;
    get songData(): string;
}
