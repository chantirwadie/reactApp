import React, { Component } from 'react'
import axios from 'axios'
export class AjouterChrono extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dateDebut:"",
             dateFin:"",
        }
    }
    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value
        })
    }
    submitHandler = (e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post("https://fierce-ridge-76224.herokuapp.com/chronos/",this.state)
        .then(Response=>
            {
                console.log(Response)
            }
        ).catch(error=>{
            console.log(error)
        })
    }
    
    render() {
        const {dateDebut,dateFin} = this.state

        return (
            
            <div>
                <div>
                    <h1 class="text-center text-success"> GESTION DES CHRONOS</h1>
                </div >
                <div className='text-center m-3'>
                    <h3>LISTES DES CHRONOS</h3>
                </div>
                <div className='row'>
                <div className='col-md-2'></div>
                <div className="col-md-8 text-center">
                <form  onSubmit={this.submitHandler}>
                    <div class="form-group">
                    <div class="mt-3">
                        <label class="mb-2" for="">Date De Debut :</label>
                        <input type="text" className="form-control" name='dateDebut' value={dateDebut} onChange={this.changeHandler}/>
                    </div>
                    <div class="mt-3">
                        <label class="mb-2" for="">Date De Fin :</label>
                        <input type="text" className="form-control" name='dateFin' value={dateFin} onChange={this.changeHandler}/>
                    </div>
                   
                    <input type="submit" className='btn btn-info mt-5'/>
                </div>
                </form>
                </div>

                </div>
                
            </div>
        )
    }
}

export default AjouterChrono
