import React, { PureComponent } from 'react';
import t from 'tcomb-form';

class SettingsForm extends PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  render() {
    const india = Object.values(this.props.countryList || {}).find(country => country.display_value === 'India') || {};
    const mh = (india.list || []).find(st => st.display_value === 'Maharashtra');
    const tMhCities = mh.list ? t.enums.of(mh.list.map(city => city.display_value), 'tMhCities') : t.string;

    const Form = t.form.Form;

    const options = {
      auto: 'none',
      order: ['name1', 'bio1', 'city1', 'name2', 'bio2', 'city2'],
      fields: {
        name1: {
          label: 'Name',
          attrs: {
            placeholder: 'Please enter name',
            className: 'form_ele',
          },
        },
        name2: {
          label: 'Name',
          attrs: {
            placeholder: 'Please enter name',
            label: 'Name',
            className: 'form_ele',
          },
        },
        bio1: {
          label: 'Bio',
          attrs: {
            placeholder: 'Please tell something about you',
            className: 'form_ele',
          },
        },
        bio2: {
          label: 'Bio',
          attrs: {
            placeholder: 'Please tell something about you',
            className: 'form_ele',
          },
        },
        city1: {
          label: 'City',
          attrs: {
            placeholder: 'Please select your city',
            className: 'form_ele',
          },
          factory: t.struct.Select,
          nullOption: { value: 'Select city', text: 'Select city' },
        },
        city2: {
          label: 'City',
          attrs: {
            placeholder: 'Please select your city',
            className: 'form_ele',
          },
          factory: t.struct.Select,
          nullOption: { value: 'Select city', text: 'Select city' },
        },
      },
    };

    const User1Form = t.struct({
      name1: t.String,
      bio1: t.String,
      city1: tMhCities,
    });

    const User2Form = t.struct({
      name2: t.String,
      bio2: t.String,
      city2: tMhCities,
    });

    return (
      <div>
        <br /><br />
        <p>User 1 Data</p>
        <Form ref="form1" options={options} type={User1Form} />
        <br /><br />
        <p>User 2 Data</p>
        <Form ref="form2" options={options} type={User2Form} />

        <br /><br />

        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    const value1 = this.refs.form1.getValue();
    const value2 = this.refs.form2.getValue();

    if (value1 && value2) {
      const formObj = [
        { name: value1.name1, bio: value1.bio1, city: value1.city1 },
        { name: value2.name2, bio: value2.bio2, city: value2.city2 },
      ];
      this.props.onSettingsSubmit(formObj);
      this.resetForm();
    } else {
      alert('Form Incomplete');
      //    document.write(this.refs.form1.validate());
      // document.write(this.refs.form2.validate());
    }
  }

  resetForm() {
    this.setState({});
  }

  onChange(value, path) {
    // validate a field on every change
    const validate1 = this.refs.form1.getComponent(path).validate();
    console.log(validate1);
  }

  getCityList() {
    Object.values(this.props.countryList).find(eachCountry => {
      if (eachCountry.display_value === 'India') {
        eachCountry.list.find(state => {
          if (state.display_value === 'Maharashtra') {
            const cityLists = state.list;
            return cityLists;
          }
        });
      }
    });
  }
}

export default SettingsForm;
