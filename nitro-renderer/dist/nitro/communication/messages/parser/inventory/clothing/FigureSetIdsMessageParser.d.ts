import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class FigureSetIdsMessageParser implements IMessageParser {
    private _figureSetIds;
    private _boundFurnitureNames;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get figureSetIds(): number[];
    get boundsFurnitureNames(): string[];
}
