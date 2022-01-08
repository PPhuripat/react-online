import React from 'react'
import axios from 'axios'
import { Table , Image , Badge , Spinner , Button  } from 'react-bootstrap'
import Pagination from "react-js-pagination";
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




const IndexPage = () => {

    const [category , setCategory] = React.useState([])
    const [loading , setLoading] = React.useState(false)
    const [error , setError] = React.useState(null)

    const getData = async() => {
        try {
            setLoading(true)
            const response = await axios.get(`https://api.codingthailand.com/api/category`)
            console.log(response.data)
            setCategory(response.data)
        } catch (error) {

            setError(error)
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        getData()
    }, [])


    if(loading === true){
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

    if(error){
        return(
             <div className="text-center mt-5 text-danger">
                <h4>Error from API, Please try again</h4>
                <p>{error.response.data.message}</p>
            </div>
        )
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <h2>Category</h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                    category.map((c,index)=>{
                                        return(
                                            <tr key={c.id}>
                                                <td>{c.id}</td>
                                                <td>{c.name}</td>
                                                <td>
                                                    <Link ><Button variant="outline-info" >Edit <BsPencilSquare/></Button></Link>
                                                    <Link ><Button variant="outline-danger" className="ml-3">Delete <BsFillTrashFill/></Button></Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </Table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexPage