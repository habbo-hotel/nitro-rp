import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureMultiStateLogic } from './FurnitureMultiStateLogic';
export declare class FurnitureVoteMajorityLogic extends FurnitureMultiStateLogic {
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
}
