import React, { Component } from 'react'
import axios from 'axios'
export class AjouterBloc extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:""
        }
    }
    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler = (e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post("https://fierce-ridge-76224.herokuapp.com/blocs/",this.state)
        .then(Response=>
            {
                console.log(Response)
            }
        ).catch(error=>{
            console.log(error)
        })
    }
    render() {
        const {name} = this.state
        return (
            <div>
                <div>
                    <h1 class="text-center"> GESTION DES BLOCS</h1>
                </div>
                <div className='m-5'>
                    <form onSubmit={this.submitHandler}>
                      <div class="form-group">
                        <label for="">Name :</label>
                        <input type="text" class="form-control" name='name' value={name} onChange={this.changeHandler}/>
                        <input type="submit" className='btn btn-info mt-5'/>
                    </div>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default AjouterBloc
