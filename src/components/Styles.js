const SideBarStyle ={
    imgdiv : {
        display: "flex",
        minWidth: "220px",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#eee",
        margin: "auto 0"
    },

    linkDiv : {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "left-align",
        width: "200px",
        listStyle: "none",
        textTransformation: "uppercase",
        paddingLeft: "7px",
    },

    liItem : {
       fontWeight: "500",
       fontSize: "20px",
       width: "100%"
    }, 


    linkItem : {
        color: "#000",
        textDecoration: "none",
        "&:hover": {
            background: "#91bf13",
            boder: "solid",
            padding: "10px",
            color: "#fff",
            width: "100%"

          },
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
          fontSize: "19px",
          transition: "all 0.3s linear",
          "&:hover": {
            transform: "scale(1.5)",
            color: "#91bf13",

          },
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

    const dotStyle = {
        color: '#000',
        fontSize: "18px",
        textAlign: "center",
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "-15px"
      };

      const materialImage = {
            borderRadius: 50,
            width: 170,
            height: 170,
            margin: "auto",
            transition: "transform .6s",
        "&:hover": {
            transform: "scale(1.1)",
            boxShadow: "4px 4px 10px gray"
          },
      }

      const materialName ={
        fontSize: "18px",
        textAlign: "center",
        marginLeft: "-15px",
        fontWeight: "600",

        view: {
            margin: "auto",
            width: "130px",
            display: "flex",
            justifyContent: "center",
            color: "#fff",
            border: "1px solid none",
            background: "#91bf13",
            padding: 1,
            borderRadius: 5,
            transition: "transform .4s",
            "&:hover": {
                transform: "scale(1.1)",
              },
          
        }
      }

  export  {FooterStyle, SideBarStyle, dotStyle, materialName, materialImage};