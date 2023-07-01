import { SearchList } from "../SearchList/SearchList"
import { SearchInput } from "../SearchInput/Searchinput"
import { useState , useEffect} from "react"
import axios from "axios"

const API_URL = "https://fakestoreapi.com/products"


export const Search = () => {
  
  
  const [searchInputval, setSearchInputval] = useState("")
  const [searchList, setSearchList] = useState([])
  const [searchItems, setSearchItems] = useState([])

  const clearSearch=()=> {setSearchInputval("")
  setSearchItems([])}

  const fetchProductList= async() =>{
    try {
      
    const res = await axios(API_URL)
    setSearchList(res.data)
  }
     catch (error) {
      console.log(error.message)
    }}

  const handlechange =(e)=>{
    setSearchInputval(e.target.value); 
    setSearchItems( 
      searchList.filter(data=>{
      return (data.title.toLowerCase()).includes(e.target.value.toLowerCase())
    }))
  }

  useEffect(() => {
    fetchProductList();
  }, [])
  return (
   
    <>
    <SearchInput searchInputval={searchInputval} handlechange= {handlechange} clearSearch={clearSearch} />
    <SearchList searchItems={searchItems} />
    </>
  )
}

