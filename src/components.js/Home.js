import React from 'react'


function Home() {
    return (
        <div className='container-fluid'>
            <div className='row bg-success rounded'>
                <div className='col-lg-4 col-sm-12 p-3'>
                    <img className='img-fluid' src='https://storage-prtl-co.imgix.net/mp/e6a8f9e8.jpg?max-w=660&max-h=532&fit=crop&auto=format,compress&q=40' alt='book' width="100%" />
                </div>
                <div className='col-lg-8 col-sm-12 p-5 text-start'>
                    <p className='text-green p-5'><q className='fw-bold fs-1'>Library Management</q>
                        
                    </p>



                </div>
            </div>            
        </div>
    )
}

export default Home