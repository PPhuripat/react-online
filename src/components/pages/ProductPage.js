import React from 'react'
import axios from 'axios'
import { Table , Image , Badge , Spinner , Button  } from 'react-bootstrap'
import { FaMouse } from "react-icons/fa";
import {
 
  Link
} from "react-router-dom";
const ProductPage = () => {
    const [product , setProduct] = React.useState([])
    const [loading , setLoading] = React.useState(false)
    const [error , setError] = React.useState(null)
    const getData = async() => {
        try {
            setLoading(true)
            const response = await axios.get('https://api.codingthailand.com/api/course')
            console.log(response.data.data)
            setProduct(response.data.data)
        } catch (error) {
            console.error(error.response.data.status_code)
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
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <h2>Product Page</h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Course Detail</th>
                                <th>Created Date</th>
                                <th>Views</th>
                                <th>Picture</th>
                                <th>Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product.map((p,index)=>{
                                        return(
                                            <tr key={p.id}>
                                                <td>{p.id}</td>
                                                <td>{p.title}</td>
                                                <td>{p.detail}</td>
                                                <td>{p.date}</td>
                                                {/* <td>{p.view}</td> */}
                                                <td><Badge variant="success">{p.view}</Badge></td>
                                                {/* <td><img src={p.picture} width="100px"/></td> */}
                                                <td><Image src={p.picture} width={60} rounded /></td>
                                                <td><Link to={`/detail/${p.id}/title/${p.title}`}><Button variant="outline-info" >Click <FaMouse/></Button></Link></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        )   
}
export default ProductPage