import React from 'react'
import Main from '@/Layouts/Authenticated/Main'
import PrimaryButton from '@/Components/PrimaryButton'
import { Head, Link } from '@inertiajs/react'
import FlashMessage from '@/Components/FlashMessage'

const Index = ({ auth, flashMessage, movies }) => {
    return (
        <Main auth={auth}>
            <Head title="List of Movie" />

            <Link href={route('admin.dashboard.movie.create')}>
                <PrimaryButton className={`!w-3/12`}>Create Movie</PrimaryButton>
            </Link>
            {
                flashMessage?.message && (
                    <FlashMessage message={flashMessage.message} />
                )
            }

            <table className="table-fixed w-full text-center mt-5">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>
                                <img
                                    src={`/storage/${movie.thumbnail}`}
                                    className="w-32 rounded-md"
                                />
                            </td>
                            <td>{movie.name}</td>
                            <td>{movie.category}</td>
                            <td>{movie.rating.toFixed(1)}</td>
                            <td>
                                <Link
                                    href={route(
                                        "admin.dashboard.movie.edit",
                                        movie.id
                                    )}
                                >
                                    <PrimaryButton
                                        type="button"
                                        variant="warning"
                                    >
                                        Edit
                                    </PrimaryButton>
                                </Link>
                            </td>
                            <td>
                                <div
                                    onClick={() => {
                                        movie.deleted_at
                                            ? put(
                                                route(
                                                    "admin.dashboard.movie.restore",
                                                    movie.id
                                                )
                                            )
                                            : destroy(
                                                route(
                                                    "admin.dashboard.movie.destroy",
                                                    movie.id
                                                )
                                            );
                                    }}
                                >
                                    <PrimaryButton
                                        type="button"
                                        variant="danger"
                                    >
                                        {movie.deleted_at
                                            ? "Restore"
                                            : "Delete"}
                                    </PrimaryButton>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </Main>
    )
}

export default Index