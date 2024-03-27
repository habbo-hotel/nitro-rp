import { IMessageComposer } from '../../../../../api';
export declare class GetSongInfoMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetSongInfoMessageComposer>> {
    private _data;
    constructor(...args: number[]);
    getMessageArray(): number[];
    dispose(): void;
}
