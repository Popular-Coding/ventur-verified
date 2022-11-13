import React from 'react'
import { SubstrateContextProvider } from '../substrate-lib'
import '../css/BadgeAssignment.css'

function Main(props) {
    return (
        <div className="main">
            <div className="form">
                <p className="assign-cert">
                    Assign Certification
                </p>
                <div className="details">
                    <p className="recipient-details">
                        Recipient Details
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function BadgeDetails(props) {
    return (
      <SubstrateContextProvider>
        <Main {...props}/>
      </SubstrateContextProvider>
    )
  }