import React, { Component } from 'react'
import axios from 'axios'
export class Salles extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            salles : []
        }            
    }
    getSalles = () =>{
        axios.get("https://fierce-ridge-76224.herokuapp.com/salles/").then(
            Response =>{
                this.setState({
                    salles : Response.data,
                })
            }
        )
    }
    componentDidMount(){
        this.getSalles()
    } 
    render() {
        return (
            <div>
                <div className='m-5'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>TYPE</th>
                                <th>BLOC</th>
                                <th>VERSION</th>
                                <th>UPDATE</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.salles.map(s =>(
                                
                            <tr>
                                <td scope="row">{s._id}</td>
                                        <td>{s.name}</td>
                                        <td>{s.type}</td>
                                        <td>{s.bloc.name}</td>
                                        <td>{s.__v}</td>
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

export default Salles
