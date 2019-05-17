import React from 'react';
import axios from 'axios';
import './progressBar.css';
import $ from 'jquery';

const API_PROGRESS_ENDPOINT = "http://172.16.1.247:5001/Wraith/GetTestProgress";
const API_POCESSES_ENDPOINT = "http://172.16.1.247:5001/Wraith/GetTestProcesses";


class ProgressBar extends React.Component{

    state = {
        chromeThr: null,
        phantomThr: null
    };

    async componentDidMount() {
        
        const self = this;

        axios.get(API_POCESSES_ENDPOINT)
            .then(res => {
                const phantom = res.data.phantomThreads;
                const chrome = res.data.chromeThreads;
                self.setState({chromeThr: chrome, phantomThr: phantom}, () => {
                    if(self.state.chromeThr > 0 || self.state.phantomThr > 0){
                        $('.spinner').css('display', 'inline');
                    }
                });
            });

        $.get(API_PROGRESS_ENDPOINT, function(){
            $('.spinner').css('display', 'none');
        });
    };

    render() {
        return (
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        );
    }
}

export default ProgressBar;