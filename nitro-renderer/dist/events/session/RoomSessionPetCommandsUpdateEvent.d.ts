import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionPetCommandsUpdateEvent extends RoomSessionEvent {
    static PET_COMMANDS: string;
    private _petId;
    private _allCommandIds;
    private _enabledCommandIds;
    constructor(k: IRoomSession, id: number, commands: number[], enabledCommands: number[]);
    get id(): number;
    get commands(): number[];
    get enabledCommands(): number[];
}
