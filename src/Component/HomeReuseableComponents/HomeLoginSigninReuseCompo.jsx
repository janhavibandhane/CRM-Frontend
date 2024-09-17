function HomeLoginSigninReuseCompo({item1,item2,item3,item4}){
    return(
        <>
         <div className='bg-gradient-to-r from-blue-200 via-purple-100 to-pink-200 min-h-screen flex items-center justify-center'>
          <form  className='bg-gradient-to-br from-white via-blue-50 to-blue-100 p-8 shadow-xl rounded-lg w-full max-w-md md:m-0 m-4'>
            <h1 className='text-2xl font-bold mb-6'>{item1}</h1>
            {item2}

            {/* submit button */}
            <button
             type='submit'
             className='bg-blue-400 text-white p-2 rounded w-full font-bold'
             onSubmit={item3}
            >
            {item4}
          </button>

          </form>
        </div>      
        </>
    )
}
export default HomeLoginSigninReuseCompo;