
import {FaMagnifyingGlass} from 'react-icons/fa6'
import {IoMdClose} from 'react-icons/io'

const SearchBar = ({value, onChange, handleSearch, onClearSearch}) => {

  return (
    <div className="w-80 flex items-center relative ml-28">
    
    
    <input 
        type="text"
        placeholder="Search notes..."
        className="w-full text-xs bg-gray-100 rounded-lg p-2 pl-2 border border-blue-500 focus:outline-none py-[8px]"
        value={value}
        onChange={onChange}
    />
    {value &&
    (<IoMdClose className='absolute right-7 text-slate-400 cursor-pointer hover:text-black' onClick={onClearSearch} />)}
    <FaMagnifyingGlass className="absolute right-2 text-slate-400 cursor-pointer hover:text-black" onClick={handleSearch}/>
</div>


  )
}

export default SearchBar