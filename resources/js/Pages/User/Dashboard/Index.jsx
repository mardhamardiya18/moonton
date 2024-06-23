import React from 'react'
import Flickity from 'react-flickity-component'
import { Head } from '@inertiajs/react'
import FeatureMovie from '@/Components/FeatureMovie'
import MovieCard from '@/Components/MovieCard'
import Main from '@/Layouts/Authenticated/Main'

const Dashboard = ({ auth, featureMovies, movies }) => {
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
        <Main auth={auth}>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {
                        featureMovies.map((featured) => (
                            <FeatureMovie
                                key={featured.id}
                                slug={featured.slug}
                                name={featured.name}
                                category={featured.category}
                                rating={featured.rating}
                                thumbnail={featured.thumbnail}
                            />
                        ))
                    }
                </Flickity>
            </div>

            <div className='mt-[50px]'>
                <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                <Flickity className="gap-[30px]" options={flickityOptions}>

                    {movies.map(movie => (
                        <MovieCard
                            key={movie.id}
                            slug={movie.slug}
                            name={movie.name}
                            category={movie.category}
                            rating={movie.rating}
                            thumbnail={movie.thumbnail}
                        />
                    ))}

                </Flickity>
            </div>

        </Main>
    )
}

export default Dashboard