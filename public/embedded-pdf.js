class PageButton extends React.Component {
    render() {
      return (
        <button className="section" onClick={() => this.props.onClick()}>
          Page {this.props.value}
        </button>
      );
    }
  }
  
  class EmbeddedPDF extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pageNumber: 1,
      };
    }
    
    handleClick(i) {
      const pageNumber = i;
      this.setState({pageNumber: pageNumber});
    }
    
    renderPage(i) {
      return (
        <PageButton
          value={i}
          onClick={() => this.handleClick(i)}
        />
      );
    }
    
    render() {
      let map = null;
      var mapPage = "map.pdf#page=" + this.state.pageNumber;
      map = <iframe src={mapPage} width="100%" height="800px">Please download the PDF to view it: <a href="map.pdf">Download PDF</a></iframe>;
      return (
        <div className="embedded-pdf">
          <div className="table-of-contents">
            {this.renderPage(1)}
            {this.renderPage(2)}
            {this.renderPage(3)}
            {this.renderPage(4)}
          </div>
          <div className="pdf">
            {map}
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<EmbeddedPDF />, document.getElementById('content'));