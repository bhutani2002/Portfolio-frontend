import { Tooltip, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Newsletter } from '../NewsLetterSub/NewsLetterSub'
import Scrollbars from 'react-custom-scrollbars'

const ToolTip = () => {
  return (
    <Tooltip
      title='Delete'
      placement = 'right'
      arrow
      enterDelay={500}
      leaveDelay={200}>
      <IconButton>
        {/* <DeleteIcon /> */}
      </IconButton>
    </Tooltip>
  )
}
export default ToolTip