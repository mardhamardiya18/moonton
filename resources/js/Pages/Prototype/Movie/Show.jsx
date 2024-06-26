import { Link } from '@inertiajs/react'
import React from 'react'
import ReactPlayer from 'react-player'

const Show = () => {
    return (

        <section className="mx-auto  h-screen relative watching-page font-poppins bg-form-bg" id="stream">
            <div className='pt-[100px]'>
                <ReactPlayer
                    url="https://youtu.be/vmIGxk-MMnQ?si=YCcxZxRQgY7Jg8nr"
                    controls
                    width={"100%"}
                    height={"850px"}
                />
            </div>


            <div className="absolute top-5 left-5 z-20">
                <Link href={route('prototype.dashboard')}>
                    <img src="/icons/ic_arrow-left.svg" className="transition-all btn-back w-[46px]" alt="stream" />
                </Link>
            </div>


            <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                <span className="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
                    Details Screen Part Final
                </span>
            </div>
        </section>
    )
}

export default Show