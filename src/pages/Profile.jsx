import React from 'react'
import { useTranslation } from 'react-i18next'

const Profile = () => {
    const{t}=useTranslation(['profile'])
    const submit='submit'
  return (
    <div>
      <h1>Profile</h1>
      <div>
         <label htmlFor="">{t('name')}</label>
         <input type="text" placeholder='john' />
      </div>
      <div>
         <label htmlFor="">{t('age')}</label>
         <input type="number" placeholder='25' />
      </div>
      <div>
         <label htmlFor="">{t("email")}</label>
         <input type="text" placeholder='john@live.be' />
      </div>
      <button>{t(submit)}</button>
    </div>
  )
}

export default Profile