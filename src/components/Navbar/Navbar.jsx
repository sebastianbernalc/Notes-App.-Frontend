import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import Icon from "../../assets/Images/Icon.png";
import profile_icon from "../../assets/Images/profile.png";



const Navbar = ({onSearchNote, handleClearSearch}) => {
    const Welcome = "Welcome!!";
    const  [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.clear();
        navigate("/login");
    }
    const handleSearch = () => {
        console.log(searchQuery);
        if (searchQuery) {
            onSearchNote(searchQuery)
        };
    }
    const onClearSearch = () => {
        setSearchQuery("");
        handleClearSearch();
    }
    return (
        <div className="flex items-center justify-between px-6 py-12 drop-shadow">
             <div className="flex gap-4 mb-4">
                <img
                className="rounded-full shadow-lg size-16"
                src= {Icon}
                alt={'Note Icon'}
                />
            </div>
            <SearchBar 
                value = {searchQuery}
                onChange = {({target}) => {setSearchQuery(target.value)}}
                handleSearch = {handleSearch}
                onClearSearch = {onClearSearch}
                />
            <ProfileInfo icon = {profile_icon} userInfo={Welcome} onLogout={onLogout}/>
            
        </div>
    );
};

export default Navbar;