import React from 'react';
import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}
const plainOptions = ['Recreation', 'Arts & Entertainment', "Circuises and Carnivals", "Restaurants", "Retail", "Other"];
const options = [
    { label: 'Restaurants', value: 'Restaurants' },
    { label: 'Stores', value: 'Stores' },
   // { label: 'Other', value: 'Other' },
];
const optionsWithDisabled  = [
    { label: 'Restaurants', value: 'Restaurants' },
    { label: 'Stores', value: 'Stores' },
  //  { label: 'Other', value: 'Other', disabled: false },
];

const listItems = plainOptions.map(option => <li>{}</li>)

class RestaurantCheck extends React.Component {
    render() {
        return (
            <div>
             <CheckboxGroup options={plainOptions} defaultValue={['Restaurants']} onChange={onChange} />
            </div>
        )
    }
}
class StoreCheck extends React.Component {
    render() {
        return (
            <div>
            <CheckboxGroup options={options} defaultValue={['Stores']} onChange={onChange} />
            </div>
            
            )
    }
}

export { RestaurantCheck, StoreCheck}
