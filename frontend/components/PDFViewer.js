import React from 'react';
import PropTypes from 'prop-types';
import { changeHandbookPage } from '../actions/index';

class PDFViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: '0'
        }
        this.goToPage = this.goToPage(this);
    }

    goToPage(page) {
        alert('You need to implement this.');
        const { changePage } = this.props;
        changePage(page);

    }

    render() {
        const { page } = this.state;
        return (
            <div>
                <div>
                    The page is {page}
                </div>
                <li>
                    <button style={{display: 'inline-block', marginLeft: 15}} onClick={() => this.goToPage(1)}>1</button>
                    <button style={{display: 'inline-block', marginLeft: 15}} onClick={() => this.goToPage(2)}>2</button>
                    <button style={{display: 'inline-block', marginLeft: 15}} onClick={() => this.goToPage(3)}>3</button>

                </li>
            </div>
    );
    }
}

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {
        changePage: page => {
            /**
             * TODO (5)
             *
             * Uncomment this line and call your imported action creator here
             */
            dispatch(changeHandbookPage(page));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PDFViewer);