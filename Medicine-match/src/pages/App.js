import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SearchIcon from 'material-ui/svg-icons/action/search';
import './App.css';
import { TextField } from 'material-ui';

class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {
           searchText: '',
            open: false,
        };
    }
    onChange = (event) => {
        this.setState({ searchText: event.target.value });
    };

    handleKeyDownTextField = (event) => {
        const { searchText } = this.state;
        if (event.key === 'Enter' && searchText.length !== 0) {
            this.props.history.push('/card');
        }
    };
    render() {
        return (
            <div>
                <Row>
                    <Col lg={4} md={4} sm={3} xs={2}/>
                    <Col lg={4} md={4} sm={6} xs={8}>
                        <div  className="searchTextField">
                            <TextField
                                placeholder="This is a auto complete"
                                fullWidth
                                onKeyDown={this.handleKeyDownTextField}
                                onChange={this.onChange}
                                underlineShow={false}
                                value={this.state.searchText}
                            />
                            <SearchIcon/>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
