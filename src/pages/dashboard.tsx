import React from 'react';
import LeftNavigation from '@/components/leftNavigation/leftNavigation';
import { Box } from '@mui/material';
import DashboardOverviewComponent from '@/components/overview/DashboardOverviewComponent';
import DashBoardCommonHeader from '@/components/header/DashBoardCommonHeader';

const Dashboard: React.FC = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "row", Width: '100%', gap: "25px" }}>
            <Box >
                <LeftNavigation />
            </Box>
            <Box>
                <DashBoardCommonHeader />
                <DashboardOverviewComponent />
            </Box>
        </Box>
    )
}

export default Dashboard;