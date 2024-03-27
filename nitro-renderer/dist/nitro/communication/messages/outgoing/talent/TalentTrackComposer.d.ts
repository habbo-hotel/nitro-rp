import { IMessageComposer } from '../../../../../api';
export declare class TalentTrackComposer implements IMessageComposer<ConstructorParameters<typeof TalentTrackComposer>> {
    private _data;
    constructor(type: string);
    getMessageArray(): [type: string];
    dispose(): void;
}
