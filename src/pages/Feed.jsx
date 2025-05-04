import { FeedAction } from '../components/FeedAction';
import { FeedHeader } from '../components/FeedHeader';
import { FeedImage } from '../components/FeedImage';
import FeedImg from "../assets/story.jpg";
import StoryImg from "../assets/myimg.jpg";
import { useState, useRef, useEffect } from 'react';

export const Feed = () => {

    const [feedData, setFeedData] = useState([{
      "name": "Itszuyoung",
      "profile" : StoryImg,
      "feedImg" : FeedImg,
      "date": "2일",
      "likes" : 5,
    }]);

    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();
    const [comment, setComment] = useState("");
    const [isValid, setIsValid] = useState(true);

    const handleLike = () => {
      setFeedData(([feed]) => [{
        ...feed,
        likes: feed.likes + 1,
      }]);
    }

    const handleComment = () => {
      setModalOpen(true);
    }

    const textChangeHandler = (e) => {
      setComment(e.target.value);
    }

    useEffect(() => {
      if (comment.length >= 10) {
        setIsValid(true);
      }
      else {
        setIsValid(false);
      }
    }, [comment]);

    const handleSubmitComment = () => {
      if (isValid) {
        alert("댓글 등록 완료!");
        setComment("");
        setModalOpen(false);
      }
    }

    return (
      <main className="w-full h-[602px] bg-white flex flex-col border-t border-b border-[#AEAEAE]">
        <FeedHeader profile={feedData[0].profile} name={feedData[0].name} date={feedData[0].date}/>
        <FeedImage feedImg={feedData[0].feedImg} />
        <FeedAction likes={feedData[0].likes} onLike={handleLike} onComment={handleComment} />
        {
          modalOpen &&
          <div ref={modalBackground} onClick={e => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }} className="fixed inset-0 bg-opacity-30 flex justify-center items-center z-50">
            <div className="mt-[64px] w-[390px] h-[400px] bg-white p-6 rounded-lg shadow-lg">
    
              <p>댓글을 10글자 이상 달아주세요.</p>

              <textarea 
                name="comment" 
                value={comment}
                className="w-full h-24 border p-2 resize-none" 
                onChange={textChangeHandler}
                
              />
              
              <div>
                <button
                  className={`mt-2 px-2 py-1 rounded ${isValid ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black-500 cursor-not-allowed'}`}
                  onClick={handleSubmitComment}
                  disabled={!isValid}  
                >
                  댓글 달기
                </button>
              </div>

              <div className='relative'>
                <button 
                  onClick={() => setModalOpen(false)}
                  className='absolute top-2 right-3 text-sm border-2 rounded-sm '
                >
                  모달 닫기
                </button>
              </div>
            </div>
          </div>
        }
      </main>
    );
};