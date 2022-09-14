import React from 'react'
import { useTranslation } from 'react-i18next'

const Home = () => {
    const{t}=useTranslation(["home"])
  return (
    <div>
        <h1>
            {t("home")}
            </h1>
            <h3>{t('What is TypeScript?')}</h3>
            <p>{t('JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.')}
            {t("In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.")}
            </p>
    </div>
  )
  }

export default Home