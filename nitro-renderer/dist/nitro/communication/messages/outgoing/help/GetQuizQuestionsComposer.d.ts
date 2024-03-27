import { IMessageComposer } from '../../../../../api';
export declare class GetQuizQuestionsComposer implements IMessageComposer<ConstructorParameters<typeof GetQuizQuestionsComposer>> {
    private _data;
    constructor(k: string);
    getMessageArray(): [k: string];
    dispose(): void;
}
