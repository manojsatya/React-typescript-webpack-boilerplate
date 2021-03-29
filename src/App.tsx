import './styles.css'
import IMAGE from './react-logo.png'
import LOGO from './apple-logo.svg'

export const App = () => {
    return (
    <>
    
    <h1>React Typescript Webpack Starter Template {process.env.NODE_ENV} - {process.env.name}</h1>

    <img src={IMAGE} alt="logo" width="200" height="200"   />
    <img src={LOGO} alt="logo" width="200" height="200"   />
    </>
    )
}