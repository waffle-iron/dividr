import React from 'react';
import axios from 'axios';

import Auth from './../modules/Auth';

class Meal extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            editable: false,
            meal: this.props.meal
        }
    }

    handleClick() {
        if(this.state.editable) {
            this.setState({
                editable : false
            });
        } else {
            this.setState({
                editable : true
            });
        }

    };

    handleSubmit(event) {
        event.preventDefault();

        let id = this.props.meal._id;

        let mealName = this.refs.mealName.value;
        let cookedWeight = this.refs.cookedWeight.value;
        let servings = this.refs.servings.value;
        let portionSize = this.refs.portionSize.value;
        let baseUrl = '/api/v1/meals/' + id;

        axios
            .patch(baseUrl,
                {
                    mealName,
                    cookedWeight,
                    servings,
                    portionSize
                }, {
                    headers: {
                        "Authorization" : `${Auth.getToken()}`
                    }
                })
            .then((response) => {
                this.setState({
                    editable: false,
                    meal: response.data.meal
                });
                //this.props = response.data.meal;
                console.log(response);
            })
            .catch((errors) => {
                console.log(errors);
            });
    }

    componentWillReceiveProps(nextProps) {
        if(JSON.stringify(this.props.meal) !== JSON.stringify(nextProps.meal)){
            console.log('Props received');
        }
    }
    render() {
        const editDecision = () => {
            if(this.state.editable) {
                return (
                    <div key={_id} className="card-profile-stats">
                        <div className="card-profile-stats-intro">
                            <div className="card-profile-stats-intro-content">
                                <h3 className="meal-title">
                                    <input type="text" ref="mealName" defaultValue={mealName} />
                                </h3>
                            </div>
                            <button onClick={this.handleClick} className="button small">Cancel</button>
                        </div>
                        <hr />

                        <div className="card-profile-stats-container">
                            <div className="card-profile-stats-statistic">
                                    <input type="number" ref="cookedWeight" defaultValue={cookedWeight}/>
                                <p>Cooked Weight</p>
                            </div>
                            <div className="card-profile-stats-statistic">
                                <input type="number" ref="servings" defaultValue={servings}/>
                                <p>Servings</p>
                            </div>
                            <div className="card-profile-stats-statistic">
                                <input type="number" ref="portionSize" defaultValue={portionSize}/>
                                <p>Portion Size</p>
                            </div>
                        </div>
                            <button type="submit" onClick={this.handleSubmit} className="button small">
                                Save
                            </button>
                    </div>

                )
            } else {
                return (
                    <div key={_id} className="card-profile-stats">
                        <div className="card-profile-stats-intro">
                            <div className="card-profile-stats-intro-content">
                                <h3 className="meal-title">
                                    {mealName}
                                </h3>
                            </div>
                            <button onClick={this.handleClick} className="button small">Edit</button>
                        </div>

                        <hr />

                        <div className="card-profile-stats-container">
                            <div className="card-profile-stats-statistic">
                                <span className="stat">{cookedWeight}g</span>
                                <p>Cooked Weight</p>
                            </div>
                            <div className="card-profile-stats-statistic">
                                <span className="stat">{servings}</span>
                                <p>Servings</p>
                            </div>
                            <div className="card-profile-stats-statistic">
                                <span className="stat">{portionSize}g</span>
                                <p>Portion Size</p>
                            </div>
                        </div>
                    </div>
                )
            }
        };
        let {mealName, _id, cookedWeight, servings, portionSize}  = this.state.meal;
        return editDecision()
    }
}

export default Meal;