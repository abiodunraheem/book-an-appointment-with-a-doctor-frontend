import React from "react";

export const SideBarStyle ={
    imgdiv : {
        display: "flex",
        width: "15%",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#eee"
    },

    linkDiv : {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "flex-start",
        listStyle: "none",
        textTransformation: "uppercase",
    },

    liItem : {
       fontWeight: "600",
       fontSize: "25px",
    }, 


    linkItem : {
        color: "#000",
        textDecoration: "none",
        hover: {
            color: "red",
            textDecoration: "none",
        }
    },
    }

  