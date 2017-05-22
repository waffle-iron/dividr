import React from 'react';

class Meal extends React.Component {
    static defaultProps = {
        initialValue : {

        }
    };
    render() {
        let {mealName, _id, cookedWeight, servings, portionSize}  = this.props.meal;
        return(
                <div key={_id} className="card-profile-stats">
                    <div className="card-profile-stats-intro">
                        <div className="card-profile-stats-intro-content">
                            <h3 className="meal-title">{mealName}</h3>
                    </div>
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
}

export default Meal;