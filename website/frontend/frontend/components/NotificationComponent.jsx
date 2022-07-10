import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Badge } from '@mui/material';

function NotificationComponent() {
  return (
    <div>
       <Badge color="danger" variant="dot" sx={{
        '& .MuiBadge-badge': {

          top:'6px',
          right:'5px',
        }

       }} >
          <NotificationsNoneIcon />
        </Badge>
    </div>
  )
}

export default NotificationComponent;