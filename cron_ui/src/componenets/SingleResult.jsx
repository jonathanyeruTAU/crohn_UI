import { Box, CircularProgress } from '@mui/material';
import { CustomTooltip } from './CustomTooltip';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';


const SingleResult = ({isLoading, color, message, icon}) => {
  
  return (
    <Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <CustomTooltip title={message}>
          {icon === 'authenticity' && <PersonIcon sx={color} />}
          {icon === 'engagement' && <GroupsIcon sx={color} />}
          {icon === 'topic' && <SpeakerNotesIcon sx={color} />}      
        </CustomTooltip>
      )}
    </Box>
  )
}

export default SingleResult
