import { IMessageComposer } from '../../../../../api';
export declare class GetOfficialSongIdMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetOfficialSongIdMessageComposer>> {
    private _data;
    constructor(k: string);
    getMessageArray(): [k: string];
    dispose(): void;
}
