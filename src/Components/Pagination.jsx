import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Pagination = () =>{
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(()=>{
        const FetchedData = async () =>{
            try{
             const response = await axios.get("https://dummyjson.com/quotes")
             console.log('response :', response.data.quotes)
             setData(response.data.quotes)
            }catch(error){
               console.log('Error Occured while Fetching Data',error)
            }
        }
        FetchedData()
    },[])

        // **Calculate Pagination**
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
        const totalPages = Math.ceil(data.length / itemsPerPage);
    
        // **Handle Page Change**
        const nextPage = () => {
            if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
            }
        };
    
        const prevPage = () => {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
            }
        };

    return(
        <div style={{padding:'2em'}}>
<h3>Pagination</h3>
<table border={1}>
    <tr>
        <th>Sr.No</th>
        <th>Author</th>
        <th>Quote</th>
    </tr>
    {currentItems.map((data1, index)=>(
            <tr key={index} >
            <td>{indexOfFirstItem + index + 1}</td>
            <td>{data1.author}</td>
            <td>{data1.quote}</td>
        </tr>
    ))}
</table>
<div style={{ marginTop: '1em' }}>
                <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
                <span style={{ margin: '0 1em' }}>Page <span>{currentPage}</span> of <span>{totalPages}</span> </span>
                <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>

    )
}
export default Pagination