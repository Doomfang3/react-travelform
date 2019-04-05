import React, {Component} from "react"
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstname: '',
            lastname: '',
            age: 0,
            gender: '',
            destination: '',
            isVegan: false,
            isKosher: false,
            isLactoseFree: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        switch(event.target.type) {
            case 'text':
                switch(event.target.placeholder) {
                    case 'First Name':
                        this.setState({
                            firstname: event.target.value
                        })
                        break
                    case 'Last Name':
                        this.setState({
                            lastname: event.target.value
                        })
                        break
                    case 'Age':
                        this.setState({
                            age: event.target.value
                        })
                        break
                    default:
                    }
                    break
            case 'radio':
                this.setState({
                    gender: event.target.value
                })
                break
            case 'select-one':
                this.setState({
                    destination: event.target.value
                })
                break
            case 'checkbox':
                const target = event.target;
                const name = target.name
                const value = target.checked
                this.setState({
                    [name]: value
                })
                break
            default:
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        const displayText = ['Vegan', 'Kosher', 'Lactose Free']
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="First Name" onChange={this.handleChange} value={this.state.firstname} /><br />
                    <input placeholder="Last Name" onChange={this.handleChange} value={this.state.lastname} /><br />
                    <input placeholder="Age" onChange={this.handleChange} value={this.state.age > 0 ? this.state.age : ''} /><br />
                    <br />
                    <label>
                        <input type="radio" value="Male" checked={this.state.gender === 'Male'} onChange={this.handleChange} />
                         &nbsp;Male
                    </label>
                    <br />
                    <label>
                        <input type="radio" value="Female" checked={this.state.gender === 'Female'} onChange={this.handleChange} />
                        &nbsp;Female
                    </label>
                    <br />
                    <label>
                        Choose your destination:
                        <select value={this.state.destination} onChange={this.handleChange}>
                            <option value='' disabled>Choose</option>
                            <option value="Lyon">Lyon</option>
                            <option value="Palma">Palma</option>
                            <option value="Perth">Perth</option>
                            <option value="Nice">Nice</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Dietary restrictions:
                        <br /><label>
                            <input
                            type="checkbox"
                            name="isVegan"
                            checked={this.state.isVegan}
                            onChange={this.handleChange}
                            />
                            &nbsp;Vegan
                            </label>
                        <br /><label>
                            <input
                            type="checkbox"
                            name="isKosher"
                            checked={this.state.isKosher}
                            onChange={this.handleChange}
                            />
                            &nbsp;Kosher
                            </label>
                        <br /><label>
                            <input
                            type="checkbox"
                            name="isLactoseFree"
                            checked={this.state.isLactoseFree}
                            onChange={this.handleChange}
                            />
                            &nbsp;Lactose Free
                            </label>
                    </label>
                    <br />
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstname + (this.state.lastname ? ' ' + this.state.lastname : '')}</p>
                <p>Your age: {this.state.age > 0 ? this.state.age : ''}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: {this.state.isVegan ? ((this.state.isKosher || this.state.isLactoseFree) ? displayText[0] + ', ' : displayText[0]): null}{this.state.isKosher ? (this.state.isLactoseFree ? displayText[1] + ', ' : displayText[1]) : null}{this.state.isLactoseFree ? displayText[2] : null}
                </p>
            </main>
        )
    }
}

export default App
