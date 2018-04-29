import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Place from 'material-ui/svg-icons/maps/place';
import Star from 'material-ui/svg-icons/toggle/star';
import EmptyStar from 'material-ui/svg-icons/toggle/star-border';
import HalfStar from 'material-ui/svg-icons/toggle/star-half';

class DetailView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            detailedData: {},
            showDetail: false,
        }
    }
    componentDidMount() {
        fetch(`${process.env.PUBLIC_URL}/DetailView.json`)
            .then(resp => resp.json())
            .then((json) => {
                this.setState({
                    detailedData: json,
                });
            })
            .catch((error) => {
                console.log(`There has been a problem with your fetch operation:${error.message}`);
            });
    }
    shotCardClicked = () => {
      this.props.history.push('/card');
    };
    whenMoreDetailIsClick = () => {
        this.setState({
            showDetail: !this.state.showDetail,
        })
    };
    render(){
        const data = this.state.detailedData.detailViewData ? this.state.detailedData.detailViewData : [];
        return(
            <div style={{ margin: '5%' }}>
                {data.map(value => (
                    <div style={{backgroundColor: '#A1F5CB', padding: '2%' }}>
                        <div style={{ textAlign: 'center' }}>
                            <h1>
                                Detail Information
                            </h1>
                        </div>
                        <div style={{
                            display: 'flex',
                            }}
                        >
                            <div style={{ fontWeight: '600', paddingRight: '3%', fontSize: '1.5rem' }}>Name :</div>
                            <div style={{ marginTop: '5px' }}>{value.name}</div>
                        </div>
                        <div style={{
                            display: 'flex',
                        }}
                        >
                            <div style={{ fontWeight: '600', paddingRight: '3%', fontSize: '1.5rem' }}>Price :</div>
                            <div style={{ marginTop: '5px' }}>{value.price}</div>
                        </div>
                        <div>
                            <div style={{ fontWeight: '600', paddingRight: '3%', fontSize: '1.5rem' }}>nutions content</div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ marginLeft: '3%' }}>
                                    <div style={{ fontWeight: '550', paddingRight: '3%', width: '100%', fontSize: '1.2rem' }}>Vitamin</div>
                                    <div style={{ fontWeight: '550', paddingRight: '3%', width: '100%', fontSize: '1.2rem' }}>Mineral</div>
                                    <div style={{ fontWeight: '550', paddingRight: '3%', width: '100%', fontSize: '1.2rem' }}>Iron</div>
                                </div>
                                <div style={{ marginLeft: '3%' }}>
                                    <div>{value.nutionsContent.Vitamin}</div>
                                    <div>{value.nutionsContent.mineral}</div>
                                    <div>{value.nutionsContent.iron}</div>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                        }}
                        >
                            <div style={{ fontWeight: '600', paddingRight: '3%', fontSize: '1.5rem' }}>Age :</div>
                            <div style={{ marginTop: '5px' }}>{value.Age}</div>
                        </div>
                        <div style={{ fontWeight: '600', paddingRight: '3%', fontSize: '1.5rem' }}>
                            Note :
                            <div>{value.Note}</div>
                        </div>
                        <div style={{ display: 'flex', marginTop: '1rem' }}>
                            <div style={{ fontWeight: '600', paddingRight: '3%', fontSize: '1.5rem' }}>Manufacted By :</div>
                            <div style={{ marginTop: '5px' }}>{value.ManufactedBy}</div>
                        </div>
                        <Row style={{ marginTop: '1rem', paddingLeft: '3%' }}>
                            <div style={{ fontWeight: '600', paddingRight: '3%', fontSize: '1.5rem'}}>Doctor Rating</div>
                            <div>
                                <div>
                                    <Star/>
                                    <Star/>
                                    <Star/>
                                    <Star/>
                                    <HalfStar/>
                                </div>
                            </div>
                            <div
                                style={{
                                    textDecoration: 'underLine',
                                    fontWeight: '600',
                                    paddingRight: '3%',
                                    fontSize: '1.5rem',
                                }}
                                onClick={this.whenMoreDetailIsClick}
                            >
                                Total Votes: 35
                            </div>
                            {this.state.showDetail &&
                                <div style={{ marginTop: '2rem'}} >
                                    <div style={{ display: 'flex' }}>
                                        <div>20</div>
                                        <div style={{ paddingLeft: '2%' }}>
                                            <Star/>
                                            <Star/>
                                            <Star/>
                                            <Star/>
                                            <Star/>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <div>10</div>
                                        <div style={{ paddingLeft: '2%' }}>
                                            <Star/>
                                            <Star/>
                                            <Star/>
                                            <Star/>
                                            <EmptyStar/>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <div>5</div>
                                        <div style={{ paddingLeft: '2%' }}>
                                            <Star/>
                                            <Star/>
                                            <Star/>
                                            <EmptyStar/>
                                            <EmptyStar/>
                                        </div>
                                    </div>
                                </div>
                            }
                        </Row>
                    </div>
                ))
                }
                <div
                    style={{
                        marginTop: '4rem',
                    }}
                >
                    <div
                        style={{
                            textAlign: 'center',
                            marginBottom: '2rem',
                        }}
                    >
                        <h2>
                           More similar product
                        </h2>
                    </div>
                    <Row>
                        <Col lg={3} md={4} sm={6} xs={10}
                             style={{
                                 backgroundColor: '#DEF7F3',
                                 minHeight: '8rem',
                                 borderRadius: '5px',
                                 display: 'flex',
                                 marginRight: '2%',
                                 marginBottom: '2%',
                                 marginLeft: '2%',
                                 alignItems: 'center'
                             }}
                             onClick={this.shotCardClicked}
                        >
                            <div style={{display: 'flex', width: '100%'}}>
                                <div style={{ fontSize: '1.5rem', fontWeight: '550', width: '60%' }}>
                                    De-coltotal 500mg
                                </div>
                                <div style={{ fontSize: '1.5rem', fontWeight: '550', width: '30%' }}>
                                    15 Rs
                                </div>
                                <div style={{ width: '10%' }}>
                                    <Place style={{color: '#FF5B03'}}/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={10}
                             style={{
                                 backgroundColor: '#DEF7F3',
                                 minHeight: '8rem',
                                 borderRadius: '5px',
                                 display: 'flex',
                                 marginRight: '2%',
                                 marginLeft: '2%',
                                 marginBottom: '2%',
                                 alignItems: 'center'
                             }}
                        >
                            <div style={{ display: 'flex', width: '100%' }} onClick={this.shotCardClicked}>
                                <div style={{ fontSize: '1.5rem', fontWeight: '550', width: '60%' }}>
                                    Antaside 500mg
                                </div>
                                <div style={{ fontSize: '1.5rem', fontWeight: '550', width: '30%' }}>
                                    23 Rs
                                </div>
                                <div style={{ width: '10%' }}>
                                    <Place style={{color: '#FF5B03'}}/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={10}
                             style={{
                                 backgroundColor: '#DEF7F3',
                                 minHeight: '8rem',
                                 marginRight: '2%',
                                 marginLeft: '2%',
                                 borderRadius: '5px',
                                 display: 'flex',
                                 marginBottom: '2%',
                                 alignItems: 'center'
                             }}
                        >
                            <div style={{display: 'flex', width: '100%'}} onClick={this.shotCardClicked}>
                                <div style={{ fontSize: '1.5rem', fontWeight: '550', width: '60%' }}>
                                    Sardon 500mg
                                </div>
                                <div style={{ fontSize: '1.5rem', fontWeight: '550', width: '30%' }}  >
                                    17 Rs
                                </div>
                                <div style={{ width: '10%' }}>
                                    <Place style={{color: '#FF5B03'}}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default DetailView;
