import { usePurse, useSessionInfo } from "../../hooks";
import { RoleplayStatsContainer } from "./roleplay-stats-container/RoleplayStatsContainer";

export function MyRoleplayStats() {
    const { userFigure = null, userInfo, } = useSessionInfo();
    const { getCurrencyAmount } = usePurse();
    return <RoleplayStatsContainer username={userInfo?.username ?? '-'} figure={userFigure ?? '-'} bankBalance={0} cashBalance={getCurrencyAmount(-1)} healthCurrent={100} healthMaximum={100} energyCurrent={100} energyMaximum={100} />
}