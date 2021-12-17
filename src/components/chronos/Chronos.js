import React, { Component } from 'react'
import axios from 'axios'
export class Chronos extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             chronos:[]
        }
    }
    getChrono = () =>{
        axios.get("https://fierce-ridge-76224.herokuapp.com/chronos/").then(
            Response =>{
                this.setState({
                    chronos : Response.data,
                })
            }
        )
    }
    componentDidMount(){
        this.getChrono()
    } 
    render() {
        return (
            <div className='row'>
                <div className='text-center m-3'>
                    <h3>LISTES DES CHRONOS</h3>
                </div>
                <div className='col-md-2'></div>
                <div className="col-md-8 text-center">

                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE DEBUT</th>
                            <th>DATE FIN</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.chronos.map(chrono =>(
                             
                             <tr>
                                 
                                        <td scope="row">{chrono._id}</td>
                                         <td>{chrono.dateDebut}</td>
                                         <td>{chrono.dateFin}</td>
                                         <td><a className='btn btn-info'>Update</a></td>
                                        <td><a className='btn btn-danger'>Delete</a></td>
                             </tr>
                                 ))}
                    </tbody>
                </table>
                </div>
            </div>


        )
    }
}

export default Chronos
