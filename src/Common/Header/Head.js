// import React from 'react'

//  const Head= () => {
//   return (
//     <>
//       <section className='head'> 
//           <div className='container d_flex'> 
//                 <div className='left row'> 
//                    <i className='fa-solid fa-phone'></i>
//                    <label> +1234 567 890 </label>
//                    <i className="fa-solid fa-envelope"></i>
//                    <label> example@gmail.com </label>
//                 </div>
//                 <div className='right row RText'> 
//                 <label> Theme FAQ's </label>
//                 <label> Need Help? </label>    
//                 <span> 🏳️‍⚧️ </span>
//                 <label htmlFor=''> EN </label> 
//                 <span> 🏳️‍⚧️ </span>
//                 <label htmlFor=''> USD </label>
//                 </div>
//             </div>
//       </section>
//     </>
//   )
// }

// export default Head




import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +88012 3456 7894</label>
            <i className='fa fa-envelope'></i>
            <label> support@ui-lib.com</label>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <span>🏳️‍⚧️</span>
            <label>EN</label>
            <span>🏳️‍⚧️</span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head

