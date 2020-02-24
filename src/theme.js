import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme(
    {
        breakpoint:{
          values:{
            xs:430
          }
        },
        typography: {
          fontFamily: [
            'Montserrat',
            '-apple-system',
          ].join(','),
        }
    }
);


export default theme;
