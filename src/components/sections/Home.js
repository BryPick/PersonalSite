import React, { Component } from 'react';
import Header from "../layouts/Header";
import HeadFooter from "../layouts/HeadFooter";

class Home extends Component {
    render() {
        return (
            <div className="container" id="home">
                <Header/>
                <HeadFooter/>
            </div>
        )
    }
}

export default Home;