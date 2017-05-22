import React from 'react'
import axios from 'axios';
import {hashHistory} from 'react-router'

import Meal from 'Components/Meal';
import Auth from '../modules/Auth';


class MealList extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                profile: {},
                meals: []
            }
        }
    }

    componentDidMount() {
        let _this = this;
        this.serverRequest =
            axios
                .get('/api/v1/meals', {
                    headers: {
                        "Authorization" : `${Auth.getToken()}`
                    }
                })
                .then((result) => {
                    _this.setState({
                        user: result.data.user
                    })
                })
    }

    componentWillMount() {
        if(!Auth.isUserAuthenticated()) {
            hashHistory.push('/login');
        }
    }

    componentWillUnmount() {
        console.log('has unmounted')
    }


    render() {
        let {user} = this.state;
        return (
        <div className="row">
            <div className="column small-centered medium-4 large-6">
                <div className="meal-list">
                    <h1>{user.profile.firstName}</h1>
                        {user.meals.map((meal) => {
                            return (
                                <Meal key={meal._id} meal={meal} />
                            )
                        })}
                </div>
            </div>
        </div>
        );
    }
}

export default MealList;