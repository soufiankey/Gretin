import React from 'react'

const PostInfo = () => {
  return (
    <div className="myModalInfo">
        <div className="myModalInfoLeft">
          <div className="top">
            <h4>Description du poste </h4>
            <p>
                      text to describe the post  Random text Random text Random text Random text Random text Random text Random text Random text
                      Random text Random text Random text 
            </p>
          </div>

          <div className="bottom">
            <h4>Profil recherché </h4>
            <p>
            text to describe the searched profile  Random text Random text Random text Random text Random text Random text Random text Random text
                      Random text Random text Random text 
            </p>
          </div>
        </div>
        <div className="myModalInfoRight">
          <div>
            <h4>Amplitude horaire</h4>
            <p>08:00 - 18:00 - lundi - vendredi</p>
          </div>
          <div>
            <h4>Type de contrat</h4>
            <p>contrat cdi</p>
          </div>
          <div>
            <h4>Salaire</h4>
            <p>8000 DH</p>
          </div>
        </div>
      </div>
  )
}

export default PostInfo