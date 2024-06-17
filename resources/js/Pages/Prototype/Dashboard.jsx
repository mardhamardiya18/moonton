import React from 'react'
import Index from '@/Layouts/Authenticated/Index'
import Flickity from 'react-flickity-component'
import { Head } from '@inertiajs/react'
import FeatureMovie from '@/Components/FeatureMovie'

const Dashboard = () => {
    const flickityOptions = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    }

    return (
        <Index>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {
                        [1, 2, 3, 4].map(i => (
                            <FeatureMovie key={i} slug={`the-batman-in-love`} name={`The Batman in Love ${i}`} category={`Action`} rating={i + 1} thumbnail={`/images/featured-1.png`} />
                        ))
                    }
                </Flickity>
            </div>

        </Index>
    )
}

export default Dashboard