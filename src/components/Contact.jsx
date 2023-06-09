import React from 'react';

const Contact = () => {
    return (
        <>
            <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white '>

                <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                    <div className='pb-8 '>
                        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                        <p className='py-6'>Submit the form below to get in touch woth me </p>
                    </div>

                    <div className='flex justify-center items-center'>
                        <form action="https://getform.io/f/1489f8e7-9f5c-4cea-9fd3-1f9324e07372" method='post' className='flex flex-col w-full md:w-1/2 ' >
                            <input type="text" name='name ' placeholder='Enter your Name' className='p-2 bg-transparent border-2 text-white rounded-md focus:outline-none' />

                            <input type="text" name='email ' placeholder='Enter your Email' className='p-2 bg-transparent border-2 text-white rounded-md focus:outline-none my-4' />

                            <textarea name="message" placeholder='Enter your message' className='p-2 bg-transparent  border-2 rounded-md focus:outline-none text-white ' rows="10"></textarea>

                            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto  flex  items-center hover:scale-105 duration-300 rounded-md '>Let's Talk</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact