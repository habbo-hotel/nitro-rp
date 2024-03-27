import { IMessageComposer } from '../../../../../api';
export declare class GetIsUserPartOfCompetitionMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetIsUserPartOfCompetitionMessageComposer>> {
    private _data;
    constructor(k: string);
    getMessageArray(): [k: string];
    dispose(): void;
}
