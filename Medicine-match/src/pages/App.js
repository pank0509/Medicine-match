import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SearchIcon from 'material-ui/svg-icons/action/search';
import './App.css';
import Autosuggest from 'react-autosuggest';

const medicines = [
    {
        name: 'Dolo 650 mg',
    },
    {
        name: 'Dolo 550 mg',
    },
    {
        name: 'docoltotal',
    },
    {
        name: 'detrahydra',
    },
    {
        name: 'paracetamol 650mg',
    },
    {
        name: 'paracetamol 550mg',
    }
];

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return medicines.filter(medicine => regex.test(medicine.name));
}

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion.name}</span>
    );
}


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.props.history.push('/card');
        this.setState({
            suggestions: []
        });
    };
    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Type the name of medicine like Dolo'",
            value,
            onChange: this.onChange
        };
        return (
            <div>
                <Row>
                    <Col lg={4} md={4} sm={3} xs={2}/>
                    <Col lg={4} md={4} sm={6} xs={8}>
                        <div  className="searchTextField">
                            <Autosuggest
                                suggestions={suggestions}
                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                getSuggestionValue={getSuggestionValue}
                                renderSuggestion={renderSuggestion}
                                highlightFirstSuggestion={true}
                                inputProps={inputProps}
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
