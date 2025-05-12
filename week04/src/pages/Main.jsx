import { useState } from "react";
import SearchBar from "../components/SearchBar";
import InfoCard from "../components/InfoCard";

const Main = () => {
    const [program, setProgram] = useState('');

    const handleSearch = (newProgram) => {
        setProgram(newProgram);
    }

    return (
        <>
        <main className="flex flex-col items-center justify-start h-screen">
            <div className="w-full fixed top-0 bg-white z-10 flex justify-center">
                <SearchBar onSearch = {handleSearch} />
            </div>

            <div className="mt-20 w-full max-w-4xl overflow-y-auto flex-1">
                <InfoCard pr_name={program} />
            </div>
        </main>
        </>

    )
}

export default Main;