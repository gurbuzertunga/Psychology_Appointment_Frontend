import renderer from 'react-test-renderer';
import {
  BrowserRouter,
} from 'react-router-dom';
import LoginForm from '../components/loginForm';
import SignUpForm from '../components/signUpForm';
import Home from '../containers/Home';
import NotFound from '../containers/404';

it('should render the home page correctly', () => {
  const homePage = renderer.create(<Home />).toJSON;
  expect(homePage).toMatchSnapshot();
});

it('should render the home page correctly', () => {
  const homePage = renderer.create(<Home />).toJSON;
  expect(homePage).toMatchSnapshot();
});

it('should render the 404 page correctly', () => {
  const notFound = renderer.create(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  ).toJSON;
  expect(notFound).toMatchSnapshot();
});

it('should render LoginForm correctly', () => {
  const loginForm = renderer.create(<LoginForm handleClick={(() => true)} />).toJSON();
  expect(loginForm).toMatchSnapshot();
});

it('should render signupForm correctly', () => {
  const signUpForm = renderer.create(<SignUpForm handleClick={(() => true)} />).toJSON();
  expect(signUpForm).toMatchSnapshot();
});
