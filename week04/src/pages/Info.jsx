import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import noImg from "../assets/no_img.png";

const Info = () => {
    const {id} = useParams();
    const [show, setShow] = useState(null);

    useEffect (() => {
        const showDetail = async() => {
            try {
                const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
                setShow(response.data);
            }
            catch (error) {
                console.log("실패 : ", error);
            }
            
        };

        showDetail();
    }, [id]);

    if (!show) return <p className="text-center">로딩 중...</p>

    return (
        <main className="flex justify-center items-start text-center p-10">
            <div className="max-w-3xl w-full bg-white rounded-lg p-6">
                <h2 className="text-3xl font-bold mb-3 text-center">
                    {show.name}
                </h2>
                {show.image ? (
                            <img 
                                src={show.image.medium} 
                                alt={show.name} 
                                className="mx-auto mb-5 rounded"
                            />
                        ) : (
                            <img 
                                src={noImg} 
                                alt={show.name} 
                                className="mx-auto mb-5 rounded"
                            />
                        )
                }

                {show.genres.length > 0 ? (
                    <p className="text-center">
                        <span className="font-bold">장르</span> : {show.genres.map((genre) => `#${genre}`).join(" ")}
                    </p>
                ) : (
                    <p className="text-center">
                        <span className="font-bold">장르</span> : 정보 없음
                    </p>
                )}

                {show.premiered ? (
                    <p className="text-center mt-3">
                        <span className="font-bold">개봉일</span> : {show.premiered}
                    </p>
                ) : (
                    <p className="text-center mt-3">
                        <span className="font-bold">개봉일</span> : 정보 없음
                    </p>
                )}

                <p className="mt-3 font-bold">줄거리</p>

                {show.summary ? (
                    <p dangerouslySetInnerHTML={{ __html: show.summary }} />
                ) : (
                    <p className="text-center mt-3">
                        정보 없음
                    </p>
                )}
            </div>
        </main>
    )
}

export default Info;