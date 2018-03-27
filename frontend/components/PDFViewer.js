import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PDFViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        }
        this.goToPage = this.goToPage.bind(this);
    }


    goToPage(page) {
        this.setState({page: page});
    }

    render() {
        const { page } = this.state;
        const src = "map.pdf#page=" + page;
        return (
            <div>
                <h1>pdf page {page}</h1>
                <a href="map.pdf">Download PDF</a>
               <button onClick={() => this.goToPage(1)}> go to page 1</button>
                <button onClick={() => this.goToPage(2)}> go to page 2</button>
                <button onClick={() => this.goToPage(3)}> go to page 3</button>
                <button onClick={() => this.goToPage(4)}> go to page 4</button>
                <object data={src} type="application/pdf" width="100%" height="800px">
                </object>
            </div>

    );}

}



const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PDFViewer);