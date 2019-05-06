import React from 'react';
import WriathLinks from '../wraith/wraith_links';
import './headnav.css';

class HeadNav extends React.Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand font-weight-bold text-light" href="/">FMG TESTS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                    <WriathLinks/>
                </div>
            </nav>

        );
    }
}

export default HeadNav;