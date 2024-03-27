import { IMessageComposer } from '../../../../../../api';
export declare class UserFigureComposer implements IMessageComposer<ConstructorParameters<typeof UserFigureComposer>> {
    private _data;
    constructor(gender: string, figure: string);
    getMessageArray(): [gender: string, figure: string];
    dispose(): void;
}
