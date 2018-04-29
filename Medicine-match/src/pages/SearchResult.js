import React from 'react';
import Star from 'material-ui/svg-icons/toggle/star';
import HalfStar from 'material-ui/svg-icons/toggle/star-half';
import Place from 'material-ui/svg-icons/maps/place';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

class SearchResult extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showLocation : false,
            dataForCard : {},
            value: 'Age',
        }
    }
    componentDidMount() {
        fetch(`${process.env.PUBLIC_URL}/SearchResult.json`)
            .then(resp => resp.json())
            .then((json) => {
                this.setState({
                    dataForCard: json,
                });
            })
            .catch((error) => {
                console.log(`There has been a problem with your fetch operation:${error.message}`);
            });
    }
    handleChange = (event, index, value) => this.setState({ value });

    whenCardClicked = () => {
        console.log('clicked div');
        this.props.history.push('/detail-view');
    };
    showTheLocation = () => {
        console.log('clicked nav');
        this.props.history.push('map');
    };
    render(){
        const data = this.state.dataForCard.cardData ? this.state.dataForCard.cardData : [];
        return(
            <div
                style={{
                    marginLeft: '2rem',
                    marginRight: '2rem'
                }}
            >
                <h1
                    style={{
                        minHeight: '4rem',
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '3rem',
                        justifyContent: 'center',
                    }}
                >
                    Suggesstion List
                </h1>
                <Row>
                    <Col lg={11} md={11} sm={11} xs={11}>
                        <div style={{ textAlign: 'right' }}>
                            <DropDownMenu value={this.state.value} onChange={this.handleChange} >
                                <MenuItem value="Age" primaryText="Age" />
                                <MenuItem value="Price" primaryText="Price" />
                                <MenuItem value="Doctor Rating" primaryText="Doctor Rating" />
                            </DropDownMenu>
                        </div>
                    </Col>
                </Row>
                <div>
                    {data.map(value => (
                        <div
                             style={{
                                 backgroundColor: '#DEF7F3',
                                 borderRadius: '5px',
                                 marginLeft: '1rem',
                                 marginRight: '1rem',
                                 paddingLeft: '5%',
                                 marginBottom: '2rem',
                                 paddingRight: '5%',
                                 paddingBottom: '1%',
                                 paddingTop: '1%'
                             }}
                             key={value.id}
                             onClick={this.whenCardClicked}
                        >
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div style={{
                                    display: 'flex',
                                    minHeight: '5rem',
                                    width: '50%',
                                    alignItems: 'center'
                                }}
                                >
                                    <div
                                        style={{
                                            fontWeight: '600',
                                            paddingRight: '3%',
                                            width: '30%',
                                            fontSize: '1.5rem',
                                        }}
                                    >
                                        Age :
                                    </div>
                                    <div style={{ marginTop: '5px', marginLeft: '3%' }}>{`${value.age} years`}</div>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        minHeight: '5rem',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Star/>
                                    <Star/>
                                    <Star/>
                                    <Star/>
                                    <HalfStar/>
                                </div>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div style={{ fontSize: '1.5rem', fontWeight: '550' }}>
                                    {value.name}
                                </div>
                                <div style={{ fontSize: '1.5rem', fontWeight: '550' }}  >
                                    <div>{`Price : ${value.price}`}</div>
                                </div>
                                <div>
                                    <Place style={{color: '#FF5B03', zIndex: '100'}} data-for='global'/>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        )
    }
}
export default SearchResult;
