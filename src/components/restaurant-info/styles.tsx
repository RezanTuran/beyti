import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  container: {
    backgroundColor: '#484848',
    marginTop: '-3px',
    display: 'flex',
    justifyContent: 'center',
  },
  infoBoxContainer: {
    paddingTop: '10em',
    display: 'flex',
    alignItems: 'center',
    width: '70%',
  },
  infoBox: {
    width: '100%',
  },
  title: {
    color: '#C7914E',
    fontFamily: 'Norican',
    fontSize: '42px',
    fontWeight: 'bold',
  },
  slogan: {
    color: 'white',
    fontSize: '53px',
    lineHeight: '60px',
    letterSpacing: '-.25px',
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
  },
  button: {
    backgroundColor: '#C7914E',
    fontFamily: 'Artifika',
    fontWeight: 'bold',
  },
  imgBox: {
    width: '100%',
    marginTop: '2em',
  },
  img: {
    width: '100%',
  },
}));
