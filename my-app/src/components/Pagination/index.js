 

import './index.css'

const Pagination = ({totalPages, currentPage, setCurrentPage}) => {


  const nxtPage = () => {
    if (currentPage < totalPages){
      setCurrentPage(currentPage + 1)
    }
    
  }

  const prevPage = () => {
    if (currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }

  const changePage = (i) => {
    setCurrentPage(i)
  }

  const renderPageNumbers = () => {
    const pageNumbers = []

    

    for (let i=1; i<=totalPages; i++){
      console.log(currentPage,i)
      const buttonStyle = (currentPage === i) ? "page-button-2" : "page-button"
      pageNumbers.push(
        <button className={buttonStyle} onClick={() => changePage(i)} key={i}>{i}</button>
      )
    }

   return pageNumbers

  }




  return(
      <div className='page-container'>
        <button className='button-2' onClick={prevPage} disabled={currentPage === 1}>Prev</button>
        
        {renderPageNumbers()}
        
        <button className='button-2' onClick={nxtPage} disabled={currentPage === totalPages}>Next</button>
      </div>
  )
}

export default Pagination