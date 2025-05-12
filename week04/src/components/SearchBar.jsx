import { useState } from "react";

const SearchBar = ( {onSearch} ) => {
    const [data, setData] = useState("");

    const saveData = (e) => {
        setData(e.target.value);
        // console.log(e.target.value);
    }

    // 버튼 누른 후 실행할 동작 
    const handleData = () => {
        if (data.trim()) {
            onSearch(data.trim());
            setData('');
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleData();
        }
    }

    return (
        <div className="flex justify-center items-center gap-2 p-4 bg-white">
            <input 
                type="text" 
                placeholder="검색하고 싶은 영화 혹은 프로그램"
                value={data}
                onChange={saveData}
                onKeyDown={handleKeyDown}
                className="border border-gray-300 rounded px-4 py-2 w-80"
            />
            <button
                onClick={handleData}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
                검색
            </button>
            
        </div>
    )
}

export default SearchBar;