import React, { PureComponent } from 'react';
import t from 'tcomb-form';
import s from '../../Container';

const Form = t.form.Form;

const options = {
  auto: 'none',
  order: ['name1','bio1','city1','name2','bio2','city2'],
  fields: {
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
});

class SettingsForm extends PureComponent{

	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	render(){
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
}

export default SettingsForm;