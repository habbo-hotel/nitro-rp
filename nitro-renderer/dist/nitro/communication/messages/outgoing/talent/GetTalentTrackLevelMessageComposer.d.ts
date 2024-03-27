import { IMessageComposer } from '../../../../../api';
export declare class GetTalentTrackLevelMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetTalentTrackLevelMessageComposer>> {
    private _data;
    constructor(name: string);
    getMessageArray(): [name: string];
    dispose(): void;
}
