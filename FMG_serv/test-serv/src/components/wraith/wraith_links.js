import React from 'react';
import './links.css';

class WraithLinks extends React.Component{

    render() {
        return(
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    CSS Gallery
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item"
                        onClick={()=> window.open("/wraith_css_test/shots/gallery.html", "_blank")}>Buro </a>
                    <a className="dropdown-item"
                       onClick={()=> window.open("/wraith_css_test_mob/shots/gallery.html", "_blank")}>Buro Mobile </a>
                    <a className="dropdown-item"
                       onClick={()=> window.open("/spletnik_css_test/shots/gallery.html", "_blank")}>Spletnik </a>
                    <a className="dropdown-item"
                       onClick={()=> window.open("/spletnik_css_test_mob/shots/gallery.html", "_blank")}>Spletnik Mobile </a>
                    <a className="dropdown-item"
                       onClick={()=> window.open("/hello_css_test/shots/gallery.html", "_blank")}>Hello </a>
                    <a className="dropdown-item"
                       onClick={()=> window.open("/hello_css_test_mob/shots/gallery.html", "_blank")}>Hello Mobile </a>
                </div>
            </div>
        );
    }
}

export default WraithLinks;