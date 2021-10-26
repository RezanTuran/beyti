import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme: any) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  toolbar: {
    backgroundColor: '#484848',
    height: 'auto',
  },
  button: {
    color: '#C7914E',
    fontWeight: 'bolder',
    letterSpacing: '1px',
  },
  logo: {
    width: '120px',
    display: 'flex',
    cursor: 'pointer',
  },
  menuIcon: {
    fontSize: '2em',
    borderRadius: '50%',
    border: '2px solid #C7914E',
    padding: '5px',
  },
}));
