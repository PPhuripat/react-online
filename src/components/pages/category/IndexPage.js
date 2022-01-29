import React from 'react'
import axios from 'axios'
import { Table  , Spinner , Button  } from 'react-bootstrap'
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import {
  
  useHistory
} from "react-router-dom";
import { useToasts } from 'react-toast-notifications';

const IndexPage = () => {
    const history = useHistory()
    const [category , setCategory] = React.useState([])
    const [loading , setLoading] = React.useState(false)
    const [error , setError] = React.useState(null)
    const { addToast } = useToasts()
    const getData = async() => {
        try {
            setLoading(true)
            const response = await axios.get(`https://api.codingthailand.com/api/category`)
            console.log(response.data)
            //console.log(response.data)
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
                    <Button variant="success" className="mb-3" onClick={ () => {history.push('/category/create')} }>+ Add New Category</Button>
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
                                                    <Button variant="outline-info" onClick={ () => {history.push('/category/edit/'+ c.id)} }>Edit <BsPencilSquare/></Button>
                                                    <Button variant="outline-danger" onClick={
                                                        async() => {
                                                            const isConfirm = window.confirm('Confirm to delete >> ' + c.name + ' ? ')
                                                            if(isConfirm === true){
                                                                const apiURL = 'https://api.codingthailand.com/api/category/' + c.id
                                                                const response = await axios.delete(apiURL).catch(error => {
                                                                    console.error('There was an error!', error.message);
                                                                });
                                                                console.log(response.data)
                                                                //console.log(response.data)
                                                                addToast(response.data.message , {appearance: 'success', autoDismiss: true })
                                                                //alert(response.data.message)
                                                                //history.replace('/create')
                                                                history.replace('/category')
                                                                //history.push('/category')
                                                                //history.go(0)
                                                            }
                                                        }
                                                    } className="ml-3">Delete <BsFillTrashFill/></Button>
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