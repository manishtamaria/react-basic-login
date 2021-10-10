import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom';
import { validateEmail, postData } from '../../utils/utils';
import { storeEmailAndToken } from '../../utils/localStore';
import { LoginPage, Form, Title } from './LoginElements';



const Login = ({ toast }) => {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();

    //Post phone number and proceeds to next page to verify otp
    const submitHandler = async (data) => {
        try {
            const response = await postData('POST', data, 'users/email');
            if (response.success) {
                const { token } = response.results;
                const { email } = data;
                storeEmailAndToken(email, token)
                history.push('/dashboard')
                toast.success(response.message);
            }
        } catch (err) {
            toast.error('INTERNAL SERVER ERROR. TRY AGAIN LATER')
            history.push('/dashboard')
            toast.success(err.message);
        }
    }


    return (
        <LoginPage>
            <Title>
                <h1>Welcome to App!</h1>
            </Title>
            <Form onSubmit={handleSubmit(submitHandler)}>
                <label>Email Id</label><br />
                <input type='text'
                       name='email'
                       autoFocus={true}
                       onKeyDown={(e) => validateEmail(e)}
                       ref={register({
                           required: 'EmailId is required',
                           minLength: {
                               value: 10,
                               message: 'Please enter a valid Email Id'
                           }
                       })} /><br />
                {errors.email && <p>{errors.email.message}</p>}<br />
                <label>Password</label><br />
                <input type='password'
                       name='password'
                       autoFocus={true}
                       ref={register({
                           required: 'Password is required',
                           minLength: {
                               message: 'Please enter a password'
                           }
                       })} /><br />
                {errors.password && <p>{errors.password.message}</p>}<br />
                <button>Login</button>
            </Form>
        </LoginPage>

    )
}

export default Login
