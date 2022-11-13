import React, {useState} from 'react'
import { SubstrateContextProvider } from '../substrate-lib'
import '../css/BadgeDetails.css'
import BadgeAssignment from './BadgeAssignment';

function Main(props) {
    var cert_details = props.cert_details;
    var is_admin = props.is_admin;
    var image = props.image;
    const [isAssigning, setIsAssigning] = useState(false);
    const assignBadge = event => {
        setIsAssigning(true);
    };
    return (
        <>
        <div className="body-container">
            <div className="content-container">
                <div className="back-button">
                    <i className="arrow-back"></i>
                    <p className="back">
                        Back
                    </p>
                </div>
                <div className="badge-overview">
                    <div className="badge-metadata">
                        <div className="badge-title-and-issuer">
                            <h1 className="badge-title">
                                {cert_details["name"]}
                            </h1>
                            <div className="issuer-section">
                                <p className="issued-by" >
                                    Issued By:
                                </p>
                                <a href="https://github.com/Popular-Coding" className="issuer">
                                    {cert_details["issued-by"]}
                                </a>
                            </div>
                        </div>
                        <p className="description">
                            {cert_details["description"]}
                        </p>
                    </div>  
                    <div className="skills-section">
                        <p className="skills">
                            Skills:
                        </p>
                        <div className="skills-buttons">
                            {
                                cert_details["skills"].map((skill) => (
                                    <button className="skill-button">
                                        <p className="skill-name">
                                            {skill}
                                        </p>
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <img className="badge" src={image}/>
                {
                    is_admin && 
                    <button className="assign-certification-button" onClick={assignBadge}> 
                        <p className="assign-certification-text">
                            Assign Certification
                        </p>
                    </button>
                }
            </div>     
        </div>     
        {
            isAssigning &&
            <BadgeAssignment />
        }   
        </>
    )
}

export default function BadgeDetails(props) {
    return (
      <SubstrateContextProvider>
        <Main {...props}/>
      </SubstrateContextProvider>
    )
  }