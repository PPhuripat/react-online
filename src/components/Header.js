import React from 'react'
import Button from '../styles/button/Button'
import Title from '../styles/title/Title'
import PropTypes from 'prop-types';



const Header = () => {
    let companyName = "TNI"
   

    const showMessage = () => {
        return companyName + ".com"
    }

    const isLogin = false;

    const showMe = () => {
        alert("Hello react")
    }



    const products = [
        {id: 1, name: "coke"},
        {id: 2, name: "Pepsi"}
    ]

    const keyword  = 'correct'

    return (
        <div>
            <Title>Project React</Title>
            <h1>Hello {showMessage()} </h1>
        
            
            <button onClick={showMe}>Click me</button>
            <Button   onClick={showMe} keyword={keyword}>
                Click me
            </Button>
            <ul>
                {

                    products.map((product,index) => {
                        return (<li key={product.id}>{product.name}</li>)
                    })
                }
                </ul>
            <hr />
        </div>
    )

    
}


export default Header

