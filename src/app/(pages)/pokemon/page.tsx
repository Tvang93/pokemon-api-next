import SearchBar from '@/components/SearchBar'
import React from 'react'

const page = () => {
  return (

      <section id="bodyContent" className="bg-[rgb(255,255,255,0.6)] border-[1.5px] rounded-2xl mt-3 mb-5 w-[100%] md:max-w-182 lg:max-w-228 xl:max-w-274 self-center lg:p-6">
        <div className="flex justify-center items-center h-[50rem] p-12">
          <h1 className='text-3xl'>Invalid Entry. Please type in a pokemon between Gen 1 and 5.</h1>
        </div>
    </section>

    
  )
}

export default page