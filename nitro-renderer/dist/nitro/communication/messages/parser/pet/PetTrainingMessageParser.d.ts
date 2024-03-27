import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class PetTrainingMessageParser implements IMessageParser {
    private _petId;
    private _commands;
    private _enabledCommands;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get petId(): number;
    get commands(): number[];
    get enabledCommands(): number[];
}
