import React from "react";
import Tilt from "react-tilt";
import "../Styles/PackageCard.css";
import { Link } from 'react-router-dom'

function OtherPackageCard({ pckg }) {

    return (
        <Tilt options={{ max: 20, scale: 1.05, speed: 600 }}>
            {
                pckg &&
                <div data-aos="fade-up" className="container trending-package-container">
                    <div data-tilt className="card trending-package-card">
                        <div className="content trending-package-content">
                            <Link to={`/musafirrana/package/${pckg._id}`}><img src={pckg.data.imageUrl} alt="ladakh" className="trending-package-card-image" /></Link>
                            <h3 style={{color: "#000"}} className="trending-package-card-title">{pckg.data.name}</h3>
                        </div>
                    </div>
                </div>
            }
        </Tilt>
    )
}

export default OtherPackageCard;