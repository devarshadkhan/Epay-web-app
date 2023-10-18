import { useRouter } from 'next/router';
import React from 'react'

const index = () => {
    const router = useRouter()
    const { image1, image2, image3, image4 } = router.query;
  return (
    <>
        <div className="p">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Hello</h1>

                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                        <img src={image4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default index