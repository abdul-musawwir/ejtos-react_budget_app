
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses, currency} = useContext(AppContext);

    const handleBudgetChange = (event) => {


        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (event.target.value > 20000) {
            return
        }

        if (event.target.value < totalExpenses) {
            alert('You cannot reduce the budget lower than the spending')
            return
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                    <input
                        type='number'
                        value={budget}
                        onChange={handleBudgetChange}
                        step = '10'
                        max= '20000'
                        >
                    </input>
            </span>
        </div>
    );
};
export default Budget;