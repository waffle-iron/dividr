import React from 'react'
import axios from 'axios';
import {hashHistory} from 'react-router'

import Meal from 'Components/Meal';
import DeleteConfirm from 'Components/DeleteConfirm';
import CreateMealForm from 'Components/CreateMealForm';
import Auth from '../modules/Auth';


class MealList extends React.Component {
    constructor() {
        super();
        this.startDeleting = this.startDeleting.bind(this);
        this.startCreating = this.startCreating.bind(this);
        this.changeMeal = this.changeMeal.bind(this);
        this.processForm = this.processForm.bind(this);
        this.state = {
            user: {
                creating: true,
                startDelete: false,
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

    startDeleting = (event) => {
        event.preventDefault();
        this.setState({
            startDelete: true
        })
    };

    cancelDelete = (event) => {
        event.preventDefault();

        this.setState({
            startDelete: false
        })
    };

    startCreating = (event) => {
        event.preventDefault();
        this.setState({
            creating: true
        })
    };

    processForm(event) {
        event.preventDefault();
        let mealName = this.state.user.meals.mealName;
        let cookedWeight = this.state.user.meals.cookedWeight;
        let servings = this.state.user.meals.servings;
        console.log(servings);
        axios
            .post('/api/v1/meals', {
                mealName,
                cookedWeight,
                servings
            }, {
                headers: {
                    "Authorization" : `${Auth.getToken()}`
                }
            })
            .then(() => {
                this.setState({
                    creating: false
                });
                this.context.router.replace('/meallist')
            }).catch((e) => {
            console.log(e)
        })
    }

    changeMeal(event) {
        console.log(event);
        const field = event.target.name;
        const meals = this.state.user.meals;
        meals[field] = event.target.value;

        this.setState({
            meals
        });
    }


    render() {
        let {user} = this.state;
        let renderDeleteOrCreate = () => {
            if(this.state.startDelete) {
                return (
                    <DeleteConfirm onClick={this.cancelDelete}/>
                )
            } else if(this.state.creating) {
                return (
                    <CreateMealForm onSubmit={this.processForm} onChange={this.changeMeal} />
                )
            } else return (

                        <div>
                            <h1>{user.profile.firstName}</h1>
                            {user.meals.map((meal) => {
                                return (
                                    <Meal key={meal._id} meal={meal} />
                                )
                            })}
                        </div>


            )
        };
        return (
            <div className="row">
                <div className="column small-centered medium-4 large-6">
                    <div className="meal-list">
                {renderDeleteOrCreate()}
                    <div className="button-group-option" data-grouptype="OR">
                        <button onClick={this.startCreating} className="button success radius">Create New Meal</button>
                        <button onClick={this.startDeleting} className="button primary radius">New Week</button>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default MealList;