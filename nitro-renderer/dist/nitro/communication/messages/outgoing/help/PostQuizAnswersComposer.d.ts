import { IMessageComposer } from '../../../../../api';
export declare class PostQuizAnswersComposer implements IMessageComposer<any> {
    private _data;
    constructor(quizCode: string, answerIds: number[]);
    getMessageArray(): any;
    dispose(): void;
}
