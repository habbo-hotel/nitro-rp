import { useState } from "react";
import { MyRoleplayStats } from "./MyRoleplayStats";
import { TargetRoleplayStats } from "./TargetRoleplayStats";

export function RoleplayStatsView() {
    return (
        <>
            <MyRoleplayStats />
            <TargetRoleplayStats />
        </>
    )
}