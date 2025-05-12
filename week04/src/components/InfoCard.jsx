import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import noImg from "../assets/no_img.png";

const InfoCard = ( { pr_name }) => {
    const [program, setProgram] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    const nav = useNavigate();

    useEffect (() => {
        const loadProgram = async () =>{
            setLoading(true);
            setError(null);

            try {
                const ProData = await axios.get (
                    `https://api.tvmaze.com/search/shows?q=${pr_name}`
                );

                setProgram(ProData.data);
            }

            catch (error) {
                console.error('프로그램 정보 가져오기 실패 : ', error);
                setProgram(null);
                setError(error.message || '알 수 없는 오류 발생');

            }

            finally {
                setLoading(false);
            }
        };

        if (pr_name) {
            loadProgram();
        }
        
    }, [pr_name]);


    return (
        <div>
            <h1 className="text-3xl font-bold ml-5">프로그램 정보</h1>
            {loading && <p className="text-center">로딩 중...</p>}
            {error && <p className="text-center">오류 : {error}</p>}

            {program.length === 0 && !loading && <p>결과가 없습니다.</p>}

            <div className="grid grid-cols-2 gap-5 justify-center">
            {program.map((item, index) => (
                <section
                    key={index}
                    onClick={() => nav(`/info/${item.show.id}`)}
                    className="w-80 bg-[#ebe5e5e3] p-6 rounded-lg shadow m-5 text-center grid place-items-center"
                >
                    {item.show.image ? (
                        <img src={item.show.image.medium} alt={item.show.name} className="h-auto rounded" />
                    ) : (
                        <img src={noImg} alt={item.show.name} className="width-[210px] height-[295px]"/>
                    )}

                    <h2 className="font-extrabold text-2xl">
                        {item.show.name}
                    </h2>

                    {item.show.genres.length > 0 ? (
                        <p>장르 : {item.show.genres.map((genre) => `#${genre}`).join(' ')}</p>
                    ) : (
                        <p>장르 정보 없음</p>
                    )}

                </ section>
            ))}
            </div>
            
        </div>
    )
}

export default InfoCard;