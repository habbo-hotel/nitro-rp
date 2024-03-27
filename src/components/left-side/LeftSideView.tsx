import { Column } from '../../common';
import { RoleplayStatsView } from '../roleplay-stats/RoleplayStatsView';

export function LeftSideView() {
    return (
        <div className="nitro-left-side">
            <Column position="relative" gap={ 1 }>
                <RoleplayStatsView />
            </Column>
        </div>
    );
}
