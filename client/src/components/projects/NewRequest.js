import React, {Component} from 'react'

class NewRequest extends Component {
    state={}

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state)
    }

    handleChange = (event) => {
        const {name, value} = event.target
        //[event.target.name] = event.target.value
        this.setState({
            [name]: value
        })
    }


    render () {
        return (
            <div>
                <form className="ui form attached fluid segment" onChange={this.handleChange}> 
                    <input type="text" name="name" onChange={this.handleChange} />
                    <div>
                    <button className="ui primary button">Submit</button>
                     </div>   
                </form>
                
            </div>

        )
    }

}

export default NewRequest