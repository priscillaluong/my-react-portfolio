/* //object destructuring
const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}
//passing through props from App.js
const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
} */

const Header = () => {
    return (
        <header>
            <h1>Some header</h1>
        </header>
    )
}

export default Header
