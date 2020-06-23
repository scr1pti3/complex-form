import React, {useState} from 'react';
import './form.scss';

function FormItem(props) {
  const [value, setValue] = useState('');

  const handleChange = event => setValue(event.target.value);

  if(props.submit)
    return (
      <li>
        <button type="submit">Submit</button>
      </li>
    );

  return (
    <li>
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type} name={props.name} value={value} onChange={handleChange}/>
      <span>{props.children}</span>
    </li>
  );
}

function Form(props) {
  return (
    <form noValidate>
      <h1>Sign Up</h1>
      <ul>
        <FormItem label="Name" type="text" name="name">
          Enter your full name here
        </FormItem>
        <FormItem label="Email" type="email" name="email">
          Enter a valid  email address
        </FormItem>
        <FormItem label="Password" type="password" name="password">
          Enter your password
        </FormItem>
        <FormItem submit/>
      </ul>
    </form>
  )
}

export default Form;
