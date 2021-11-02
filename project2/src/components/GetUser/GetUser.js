import axios from "axios";
import React, { useEffect } from 'react';
import { Row , Col , Card , CardTitle , CardText , Button , CardImg, Spinner  } from 'reactstrap'


const GetUser = () => {

    const MyInitial = [
    {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
      "id": 3,
      "email": "emma.wong@reqres.in",
      "first_name": "Emma",
      "last_name": "Wong",
      "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    {
      "id": 4,
      "email": "eve.holt@reqres.in",
      "first_name": "Eve",
      "last_name": "Holt",
      "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    {
      "id": 5,
      "email": "charles.morris@reqres.in",
      "first_name": "Charles",
      "last_name": "Morris",
      "avatar": "https://reqres.in/img/faces/5-image.jpg"
    },
    {
      "id": 6,
      "email": "tracey.ramos@reqres.in",
      "first_name": "Tracey",
      "last_name": "Ramos",
      "avatar": "https://reqres.in/img/faces/6-image.jpg"
    }
  ]

    const [post, setPost] = React.useState(MyInitial);
        const [loading , isLoading] = React.useState(true);

  

  useEffect(() => {
      axios.get('https://reqres.in/api/users').then((response) => {
        console.log("here")
          setPost(JSON.stringify(response.data.data));
          console.log(post)
          isLoading(false)
          console.log(JSON.stringify(response.data.data))
        });
  }, []);
    
    return (
        <>
            {
                loading ? (<Spinner></Spinner>) :
                    (<div>
                        <Row>
                            
                            <Col sm="4" className="marginandall">
                            <Card body>
                                <CardTitle tag="h5" style={{color: "black"}}>
                                {post.id}
                                </CardTitle>
                                <CardImg
                                alt="Card image cap"
                                src={post.avatar}
                                top
                                width="100%"
                                />
                                <CardText style={{ color: "black" }}>
                                    {post.first_name}{post.last_name}
                                </CardText>
                            </Card>
                            </Col>
                        </Row>
        </div>)
            }
</>
    )
}

export default GetUser
