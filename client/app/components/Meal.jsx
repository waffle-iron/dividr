import React from 'react';

class Meal extends React.Component {
    static defaultProps = {
        initialValue : {

        }
    };
    render() {
        let {mealName, _id, cookedWeight, servings, portionSize}  = this.props.meal;
        return(
            <div key={_id}>
                <p>{mealName}</p>
                <ul>
                    <li>Cooked Weight: {cookedWeight}g</li>
                    <li>Servings: {servings}</li>
                    <li>Portion Size: {portionSize}g</li>
                </ul>
            </div>
        )
    }
}

export default Meal;