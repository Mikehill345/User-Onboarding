import React from 'react'


export default function UserForm(props) {
    const { values, change, submit, disabled, errors } = props

    const onChange = evt => {
        const { name, value } = evt.target
        change(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }


    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2>Add a user</h2>
                <button id='button' disabled={disabled}>Submit</button>
                <div>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.tos}</div>
                </div>
            </div>

            <div className='form-container'>
                <h4>Information</h4>
                <label>Name:
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                        placeholder='Enter Name'
                    />
                </label>

                <label>Email:
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                        placeholder='Enter Email'
                    />
                </label>

                <label>Password
                    <input
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='text'
                        placeholder='Enter Password'
                    />
                </label>

                <a href='https://generator.lorem-ipsum.info/terms-and-conditions'>Terms Of Service</a>
                <p>Do you agree to the terms of Service</p>
                <label>Yes:
                    <input
                        type='radio'
                        name='tos'
                        value='true'
                        checked={values.tos === 'true'}
                        onChange={onChange}
                    />
                </label>
            </div>
        </form>
    )

}