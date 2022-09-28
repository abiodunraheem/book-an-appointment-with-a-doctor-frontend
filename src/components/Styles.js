const SideBarStyle ={
    imgdiv : {
        display: "flex",
        minWidth: "210px",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#eee",
    },

    linkDiv : {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "flex-start",
        listStyle: "none",
        textTransformation: "uppercase",
        padding: "0",
    },

    liItem : {
       fontWeight: "500",
       fontSize: "20px",
    }, 


    linkItem : {
        color: "#000",
        textDecoration: "none",
        hover: {
            color: "red",
            textDecoration: "none",
        }
    },
    };

    const FooterStyle = {
        footerSec : {
          display: "flex",
          justifyContent: "space around",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "20px"
        },

        ulIcons : {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap :"10px",
          listStyle: "none",
          padding: "0"
        },

        liIcon : {
          color: "#000",
          fontSize: "19px"
        },

        copyrightDiv : {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },

        copyright : {
         color: "#000",
         fontSize: "12px",
         fontWeight: "500"
        }
    }

  export  {FooterStyle, SideBarStyle};