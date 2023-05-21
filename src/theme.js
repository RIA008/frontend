import { createTheme } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiCard: {
      defaultProps: {
        // variant: "outlined",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...{
            padding: theme.spacing(2),
            borderWidth: "1.5px",
            backgroundcolor: "#0811"
          },
        }),
      },
    },
    // MuiContainer: {
    //   defaultProps: {
    //     // maxWidth: "md",
    //   },
    // },
  },
});

export default theme;
