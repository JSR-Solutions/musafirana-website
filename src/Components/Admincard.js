import React from "react";
import Tilt from "react-tilt";
import "../Styles/PackageCard.css";
import { Link } from 'react-router-dom'

function PackageCard({ pckg }) {

    return (
        <Tilt options={{ max: 20, scale: 1.05, speed: 600 }}>
            {
                pckg &&
                <div className="container trending-package-container">
                    <div data-tilt className="card trending-package-card">
                        <div className="content trending-package-content">
                            <img src={pckg.data.imageUrl} alt="ladakh" className="trending-package-card-image" />
                            <h3 className="trending-package-card-title">{pckg.data.name}</h3>
                        </div>
                    </div>
                </div>
            }
        </Tilt>
    )
}

export default PackageCard;