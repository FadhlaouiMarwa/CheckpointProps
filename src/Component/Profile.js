import React from 'react'
import PropTypes from 'prop-types'


function Profile({fullName,adresse,profession,children,object}) {
    return (
        <div style={object}>
          <div> <img src={children} /> </div>
          <div style={{display:"center"}}>
          <div> {fullName} </div>
          <div> {adresse} </div>
          <div> {profession} </div>
          </div>
          <button style={{margin:"auto"}} onClick={()=>alert(`C'est le profile de ${fullName}`)}>Bienvenu dans mon profile</button>

        </div>
    )
}

export default Profile
Profile.defaultProps={fullName:"Veuillez saisir votre nom complet" , adresse:"Veuillez saisir votre adresse"}
Profile.propTypes = {
  fullName: PropTypes.string
}