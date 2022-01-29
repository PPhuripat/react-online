import React from "react";
import axios from "axios";
import { Card, CardDeck, Spinner, Button } from "react-bootstrap";
import { useParams  , Link } from "react-router-dom";


const DetailPage = () => {

  const { id, title } = useParams();
 

  const [detail, setDetail] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.codingthailand.com/api/course/" + id
      );
      console.log(response.data.data);
      setDetail(response.data.data);
    } catch (error) {
      console.error(error.response.data.status_code);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    getData();
  }, [id]);
  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <h4>Error from API, Please try again</h4>
        <p>{error.response.data.message}</p>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>Detail Page</h2>
          <p>
            {title} ({id})
          </p>
          {/* <Button variant="dark mb-4" onClick={()=>{ history.goBack() }}>Back</Button> */}
          <Link to="/product"><Button variant="dark mb-4">Back</Button></Link>
          <CardDeck>
            <div className="row">
            {
                detail.length > 0 ? (
                    detail.map((detail,index) =>{
                        return (
                            <div className="col-md-4" key={detail.ch_id}>
                                <Card className="mb-4 shadow-sm">
                                <Card.Body>
                                    <Card.Title>{detail.ch_title}</Card.Title>
                                    {/* <Card.Text>
                                    This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                    </Card.Text> */}
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Date : {detail.ch_dateadd}</small>
                                </Card.Footer>
                                </Card>
                            </div>
                        )
                    })
                ) : (
                    <h1>No Data</h1>
                )
                
                
            }
            </div>
          </CardDeck>
        </div>
      </div>
    </div>
  );
};
export default DetailPage;