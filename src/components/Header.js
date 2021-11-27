import React from 'react'

const Header = () => {
    let companyName = "TNI"
   

    const showMessage = () => {
        return companyName + ".com"
    }

    const isLogin = true;

    const showMe = () => {
        alert("Hello react")
    }

    const product = [
        {id: 1, name: "coke"},
        {id: 2, name: "Pepsi"}
    ]

    return (
        <div>
            <h1>Hello {showMassage()}</h1>
            <br />
            {/* {
                isLogin === true ? (
                    <>
                    <p>Welcome</p>
                    <p>Student</p>
                    </>
                ) : (
                    <>
                        <p>Welcome</p>
                        <p>Teacher</p>
                    </>
                )
            }

            {isLogin ? <Logo /> : <p>Unlock</p> } */}

            <button onClick={showMe}>Click me</button>

            <ul>
                {

                    products.map((product,index) => {
                        return (<li key={index}>{index+1}{product.name}</li>)
                    })
                }
                </ul>

        </div>
    )
    
}


export default Header

