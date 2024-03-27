import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { PetFigureData } from '../../../../avatar';
export declare class OpenPetPackageRequestedMessageParser implements IMessageParser {
    private _objectId;
    private _figureData;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get objectId(): number;
    get figureData(): PetFigureData;
}
