import { GangPositionInfoQueryComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../../';

export function GangPositionInfoQuery(gangID: number, gangPositionID: number): void
{
    SendMessageComposer(new GangPositionInfoQueryComposer(gangID, gangPositionID));
}
