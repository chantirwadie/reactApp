import React, { Component } from 'react'
import axios from 'axios'


export class Blocs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            blocs : [
         ]
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
    render() {
        return (
            <div>
                
                <div className='m-5'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>VERSION</th>
                                <th>UPDATE</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.blocs.map(b =>(
                                
                            <tr>
                                
                                <td scope="row">{b._id}</td>
                                        <td>{b.name}</td>
                                        <td>{b.__v}</td>
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

export default Blocs
