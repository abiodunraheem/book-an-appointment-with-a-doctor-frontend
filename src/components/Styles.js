const SideBarStyle = {
  imgdiv: {
    display: 'flex',
    minWidth: '220px',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (maxWidth: 600px)': {
      position: 'fixed',
    },
    '@media (minWidth: 601px)  and (maxWidth: 920px)': {
      position: 'fixed',
    },
  },

  linkDiv: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'left-align',
    width: '200px',
    listStyle: 'none',
    textTransformation: 'uppercase',
    paddingLeft: '7px',
  },

  liItem: {
    fontWeight: '500',
    fontSize: '20px',
    width: '100%',
  },

  linkItem: {
    color: '#000',
    textDecoration: 'none',
    '&:hover': {
      background: '#91bf13',
      boder: 'solid',
      padding: '10px',
      color: '#fff',
      width: '100%',

    },
  },
};

const FooterStyle = {
  footerSec: {
    display: 'flex',
    justifyContent: 'space around',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '20px',
  },

  ulIcons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    listStyle: 'none',
    padding: '0',
  },

  liIcon: {
    color: '#000',
    fontSize: '19px',
    transition: 'all 0.3s linear',
    '&:hover': {
      transform: 'scale(1.5)',
      color: '#91bf13',

    },
  },

  copyrightDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  copyright: {
    color: '#000',
    fontSize: '12px',
    fontWeight: '500',
  },
};

export {
  FooterStyle, SideBarStyle,
};
