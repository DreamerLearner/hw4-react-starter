import React, { PureComponent } from 'react';
import t from 'tcomb-form';
import s from '../../Container';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SettingsFormMulti extends PureComponent{

	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.multiselectTemplate = this.multiselectTemplate.bind(this);

    this.state = {
      options: this.getOpts(),
      value: [],
    }
	}

	render(){

    const Form = t.form.Form;

    const city = t.enums.of([
      'Ahmednagar',
      'Akola',
      'Amravati',
      'Aurangabad',
      'Beed',
      'Bhandara',
      'Buldhana',
      'Chandrapur',
      'Dhule',
      'Gadchiroli',
      'Gondiya',
      'Hingoli',
      'Jalgaon',
      'Jalna',
      'Kolhapur',
      'Latur',
      'Malegaon',
      'Mumbai',
      'Nagpur',
      'Nanded',
      'Nandurbar',
      'Nashik',
      'Oras',
      'Osmanabad',
      'Parbhani',
      'Pune',
      'Raigad',
      'Ratnagiri',
      'Sangli',
      'Satara',
      'Sewagram',
      'Solapur',
      'Wardha',
      'Washim',
      'Yavatmal'
    ], 'city');

    const options = {
      auto: 'none',
      order: ['city','name1','bio1','city1','name2','bio2','city2'],
      fields: {
        city:{
          template: this.multiselectTemplate,
        },
        name1:{
          label:'Name',
          attrs:{
            placeholder: 'Please enter name',
            className: 'form_ele',
          } 
        },
        name2:{
          label:'Name',
          attrs:{
            placeholder: 'Please enter name',
            label:'Name',
            className: 'form_ele',
          }   
        },
        bio1:{
          label:'Bio',
          attrs:{
            placeholder: 'Please tell something about you',
            className: 'form_ele',
          }   
        },
        bio2:{
          label:'Bio',
          attrs:{
            placeholder: 'Please tell something about you',
            className: 'form_ele',
          }   
        },
        city1:{
          label:'City',
          attrs:{
            placeholder: 'Please select your city',
            className: 'form_ele',
          }
        },
        city2:{
          label:'City',
          attrs:{
            placeholder: 'Please select your city',
            className: 'form_ele',
          }   
        },
      }
    }

    const BasicSearch = t.struct({
      name1: t.String,
      name2: t.String,
      bio1: t.String,
      bio2: t.String,
      city1: t.String,
      city2: t.String,
      city: city,
    });

    return(
			<div>
				<Form
				  ref="form"
				  options={options}
				  type={BasicSearch}
				/>
				<button onClick={this.onSubmit}>Submit</button>
			</div>
		);
	}

	onSubmit(e){
		e.preventDefault();
		const value = this.refs.form.getValue();

		if(value){		
			const formObj = [{'name':value.name1, 'bio':value.bio1, 'city':value.city1}, {'name':value.name2, 'bio':value.bio2, 'city':value.city2}];
			this.props.onSettingsSubmit(formObj);
			this.setState({});
		}else{
			alert('Form Incomplete');
		}

	}

  handleSelectChange (value) {
    // console.log('You\'ve selected:', value);
    this.setState({ value });
  }

  getOpts(locals){

    const multiOpts = [];
    if(locals){
          locals.options.map( local => {
              multiOpts.push({'value':local.value,'label':local.text});
          });
    }

    return multiOpts;
  }

  multiselectTemplate(locals) {
    return (
        <Select
          ref="city" 
          multi
          simpleValue
          value={this.state.value}
          options={this.getOpts(locals)}
          onChange={this.handleSelectChange} />
    );
  }

}


export default SettingsFormMulti;
