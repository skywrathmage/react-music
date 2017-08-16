import React, { Component } from 'react';
 
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }
 
    handleExpandClick = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    }
 
    render() {
        const expanded = this.state.expanded;
        const {shortContent, content} = this.props;
        return (
            <div className="content">
                {!expanded &&
                    <div>
                        <p className="card-text short" dangerouslySetInnerHTML={{ __html: shortContent }} />
                        <div className="controls" onClick={this.handleExpandClick}>
                            <button type="button" className="btn btn-default">Xem thêm</button> <i className="fa fa-angle-down expand" aria-hidden="true" />
                        </div>
                    </div>
                }
                {expanded &&
                    <div>
                        <div className="controls" onClick={this.handleExpandClick}>
                            <button type="button" className="btn btn-default">Thu gọn</button> <i className="fa fa-angle-up expand" aria-hidden="true" />
                        </div>                        
                        <p className="card-text full" dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                }
            </div>
        );
    }
}
 
export default Content;