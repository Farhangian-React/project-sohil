import React from "react";
import { Helmet } from "react-helmet";
import "../index.css"
export const PageTitle=({title,description})=>{
return(
    <Helmet>
        <link  rel="icon"  sizes='16x16'  href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8sUcl-xSeJ2aDKi3dB9ylFBIxBLCo-JXLg&s' />
        <title> {title}</title>
        <meta name="description" content={description}/>
    </Helmet>
)
}