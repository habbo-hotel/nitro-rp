import { CorpInfoQueryComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../../';

export function CorpInfoQuery(corpID: number): void
{
    SendMessageComposer(new CorpInfoQueryComposer(corpID));
}
