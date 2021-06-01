import React, { Component } from 'react'

class AdditionalResourceComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            askOpen: true,
            numQues: ""
        }

        this.handleInput = this.handleInput.bind(this)
        this.submitAsk = this.submitAsk.bind(this)
    }

    handleInput(event){

        this.setState({
            [event.target.name]: event.target.value
        })

        console.log(this.state.numQues)
    }

    submitAsk(event){
        this.setState({
            askOpen: !this.state.askOpen
        })
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
            <div className="center-content">
                <h3>Additional resources</h3>
                {this.state.askOpen &&
                <form onSubmit={this.submitAsk}>
                    <div>
                        <label htmlFor="numQues">How many Questions?</label>
                        <input 
                            value={this.state.numQues} 
                            name="numQues" 
                            id="numQues" 
                            type="text"
                            onChange={this.handleInput}
                        />
                    </div>
                    <input type="submit"/>
                </form>
                }
                {!this.state.askOpen &&
                    <div>
                        <h2>This is the form for the questions and such</h2>
                        <ul>
                            <li>Have it generate based on the number they submit above</li>
                            <li>All must have values based on number of questions</li>
                            <li>Button to submit</li>
                        </ul>
                        <button onClick={this.submitAsk}>Submit Here</button>
                    </div>
                }    
            </div>
        )
    }
}

export default AdditionalResourceComponent;