import React from 'react'
import axios from 'axios';

import Meal from 'Components/Meal';


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
                        "Authorization" : 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTBlNjRmZTQ4ZTU0ZjQyY2FkNjYwMzkiLCJmaXJzdE5hbWUiOiJDaHJpcyIsImxhc3ROYW1lIjoiR3JheSIsImVtYWlsIjoidGVzdDJAZXhhbXBsZS5jb20iLCJpYXQiOjE0OTUyMzI4OTksImV4cCI6MTQ5NTI0Mjk3OX0.XsWXsX4V_ns6RZXErkfWLxumlmENbM5ChxpcaF7HPVU'
                    }
                })
                .then((result) => {
                    _this.setState({
                        user: result.data.user
                    })
                })
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

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