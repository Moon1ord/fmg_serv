import React from 'react';
import './sidebar.css';
import $ from 'jquery';

class SideBar extends React.Component{

    runTest(elem){
        let url = 'http://172.16.1.247:5001/Wraith/RunWraithTestAsync';
        let path = elem.target.value;
        console.log(path);
        $.post(url, {
            path: path
        });
    }

    render() {
        return (
            <div className='wrapper'>
                <div className="btn-group dropright">
                    <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Wraith
                    </button>
                    <div className="dropdown-menu">
                        <button className="dropdown-item" value='test-serv/public/wraith_css_test' onClick={this.runTest}>Run Buro</button>
                        <button className="dropdown-item" value='test-serv/public/wraith_css_test_mob' onClick={this.runTest}>Run Buro Mobile</button>
                        <button className="dropdown-item" value='test-serv/public/hello_css_test' onClick={this.runTest}>Run Hello</button>
                        <button className="dropdown-item" value='test-serv/public/hello_css_test_mob' onClick={this.runTest}>Run Hello Mobile</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;