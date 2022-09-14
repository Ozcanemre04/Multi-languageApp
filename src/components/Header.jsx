
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {Link} from 'react-router-dom'




const Header = () => {

    const {i18n,t}= useTranslation(['common'])
    
const [language,setLanguage]= useState('')
   function handleChange(e){
       setLanguage(e.currentTarget.textContent)
    }
    useEffect(()=>{
        i18n.changeLanguage(language)
    },[language])
    
    const get=localStorage.getItem('i18nextLng')
    
   
  return (
    <nav style={{display:'flex',justifyContent:"space-between",height:"100px",backgroundColor:"beige",alignItems:'center'}}>
        <Link to='/'>x</Link>
        <Link to='Profile'>profile</Link>
        <div>
           
            <button onClick={handleChange}  className={get==="en"?'active':null}>en</button>
            <button onClick={handleChange} className={get==="fr"?'active':null}>fr</button>
            <button onClick={handleChange} className={get==="nl"?'active':null}>nl</button>
        </div>
    </nav>
  )
}

export default Header