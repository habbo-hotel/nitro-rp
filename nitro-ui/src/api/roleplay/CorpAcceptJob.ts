import { CorpAcceptJobComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '..';

export function CorpAcceptJob(corpName: string): void
{
    SendMessageComposer(new CorpAcceptJobComposer(corpName));
}
