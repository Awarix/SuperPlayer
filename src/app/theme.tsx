import { teal } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'


export const theme = createTheme({
  palette: {
    primary: {
      main: teal[300],
    },
    secondary: {
      main: '#f44336',
    },
  },
});