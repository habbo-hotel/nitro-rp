import { IRoomSession } from '../../api';
import { PetFigureData } from '../../nitro';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionPetPackageEvent extends RoomSessionEvent {
    static RSOPPE_OPEN_PET_PACKAGE_REQUESTED: string;
    static RSOPPE_OPEN_PET_PACKAGE_RESULT: string;
    private _objectId;
    private _figureData;
    private _nameValidationStatus;
    private _nameValidationInfo;
    constructor(petPackageName: string, session: IRoomSession, objectId: number, figureData: PetFigureData, nameValidationStatus: number, nameValidationInfo: string);
    get objectId(): number;
    get figureData(): PetFigureData;
    get nameValidationStatus(): number;
    get nameValidationInfo(): string;
}
