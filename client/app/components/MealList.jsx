import React from 'react'
import axios from 'axios';

import Meal from 'Components/Meal';
import Auth from '../modules/Auth';


class MealList extends React.Component {
    constructor(props) {
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

    //componentWillUnmount() {
    //    this.serverRequest.abort();
    //}

    render() {
        let {user} = this.state;
        return (
            <div className="meal-list">
                <h1>{user.profile.firstName}</h1>
                    {user.meals.map((meal) => {
                        return (
                            <Meal key={meal._id} meal={meal} />
                        )
                    })}
            </div>
        );
    }
}

export default MealList;