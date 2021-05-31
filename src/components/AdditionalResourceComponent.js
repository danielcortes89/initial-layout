import React, { Component } from 'react'

class AdditionalResourceComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            numQues: ""
        }

        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(event){

        this.setState({
            [event.target.name]: event.target.value
        })

        console.log(this.state.numQues)
    }
    // componentDidMount(){
    //     let howMany =  ""

    //     if(howMany){
    //         alert('You got it')
    //         // twentySameRandomQuestions(1,5, 'mult')
    //     // -MAKE ten objects (string, number and index) and push to container array
        
    //         // appendToDom(container)
    //     } else {
    //         alert('10 it is')
    //         // tenSameRandomQuestions(1,5, 'mult')
    //     // -MAKE ten objects (string, number and index) and push to container array
        
    //         // appendToDom(container)
    //     }
    // }

    render() {
        return (
            <div>
                <h3>Additional resources</h3>
                <form>
                    <label htmlFor="numQues">How many Questions?</label>
                    <input 
                        value={this.state.numQues} 
                        name="numQues" 
                        id="numQues" 
                        type="text"
                        onChange={this.handleInput}
                    />
                </form>
            </div>
        )
    }
}

export default AdditionalResourceComponent;