import { CorpPositionInfoQueryComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../../';

export function CorpPositionInfoQuery(corpID: number, corpPositionID: number): void
{
    SendMessageComposer(new CorpPositionInfoQueryComposer(corpID, corpPositionID));
}
