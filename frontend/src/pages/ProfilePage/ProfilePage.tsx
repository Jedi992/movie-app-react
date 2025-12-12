import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { profile } from "../../app/api/authApi"
import "./ProfilePage.scss"
function ProfilePage() {
    const [profileStats, setProfileStats] = useState(null)
    const getProfile = async() => {
        const data = await profile()
        setProfileStats(data)
    }
    useEffect(() => {
        getProfile()
    },[])
  return (
    <div className="profile-stats">
  {profileStats && (
    <div className="profile-info">
      <div className="profile-avatar"><p className="profile-avatar-text">{profileStats.username[0].toUpperCase()}</p></div>
      <div>
      <p>Имя пользователя: {profileStats.username}</p>
      <p>email: {profileStats.email}</p>
      </div>
      
    </div>
  )}
</div>
  )
}

export default ProfilePage