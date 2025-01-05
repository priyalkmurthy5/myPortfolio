import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
    return (
        <section id="testimonials">
            <div className='py-18 pb-5 mb-5'>
                <h1 className='heading'>
                    Words That Inspire: {' '}
                    <span className='text-pink-500'>Testimonials from My Colleagues</span>
                </h1>
                <div className='flex flex-col items-center max-lg:mt-15 pt-3 '>

                    <InfiniteMovingCards items={testimonials} direction='right' speed='slow' />
                    <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                        {companies.map(({ id, img, name }) =>
                            <div key={id} className='flex sm:max-w-100 max-w-80 gap-2 mt-5 mb-10' >
                                <span>
                                    <img className='md:w-60 w-45' src={img} alt={name} />

                                </span>

                            </div>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients