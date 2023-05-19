import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'

const requireAuth = () => {
    const {authState} = useContext(AuthContext);
  return (
    <div>
      
    </div>
  )
}

export default requireAuth
