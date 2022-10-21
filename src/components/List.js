import React, { useNavigate } from 'react'
import { Data } from '../Dummy-Data/Data';

export const DataList = () => {
    // const navigate = useNavigate()
    // func datas(){
    //     navigate("/datalist")
    // }
    return (
        <div style={{ backgroundColor: "#e5e5e5" }}>
            <div className="">
                {Data.map((item, key) => {
                    return (
                        <div className='list'>
                            <div className="group w-100 bg-dark text-white d-flex gap-5 mt-3 p-1">
                                <img src={item.image} alt="" style={{ width: "100px" }} className="rounded rounded-circle" />
                                <div className="detail">
                                    <p>{item.username}</p>
                                    <p>Followers : {item.follower}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};