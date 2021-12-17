import React, { Component } from 'react'
import axios from 'axios'

export class AjouterSalle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            input:{
                name:"",
                type:"",
                bloc:"",
            },
             blocs:[]
        }
    }
    getBlocs = () =>{
        axios.get("https://fierce-ridge-76224.herokuapp.com/blocs/").then(
            Response =>{
                this.setState({
                    blocs : Response.data
                })
            }
        )
    }
    componentDidMount(){
        this.getBlocs()
    }
    changeHandler = (e) =>{
        this.setState({input:{
            [e.target.name]:e.target.value
        }
        })
    }
    submitHandler = (e)=>{
        e.preventDefault()
        console.log(this.state.input)
    }
    render() {
        const {name,type,bloc} = this.state
        return (
            
            <div>
                <div>
                    <h1 class="text-center"> GESTION DES SALLES</h1>
                </div>
                <form onSubmit={this.submitHandler}>
                    <div class="form-group">
                    <div class="mt-3">
                        <label class="mb-2" for="">Name :</label>
                        <input type="text" class="form-control" name='name' value={name} onChange={this.changeHandler}/>
                    </div>
                    <div class="mt-3">
                        <label class="mb-2" for="">Type :</label>
                        <input type="text" class="form-control" name='type' value={type} onChange={this.changeHandler}/>
                    </div>
                                 <div class="mt-3">
                                 <label class="mb-2" for="">Bloc</label>
                                 <select class="form-select" aria-label="Default select example" name="bloc">
                                    {this.state.blocs.map(b =>(
                                     <option value={b._id}>{b.name}</option>
                                    
                                     ))}
                                </select>
                                </div>
                   
                    <input type="submit" className='btn btn-info mt-5'/>
                </div>
                </form>
            </div>
        )
    }
}

export default AjouterSalle
