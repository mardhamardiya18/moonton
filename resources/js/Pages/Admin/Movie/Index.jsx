import React from 'react'
import Main from '@/Layouts/Authenticated/Main'
import PrimaryButton from '@/Components/PrimaryButton'
import { Link } from '@inertiajs/react'
import FlashMessage from '@/Components/FlashMessage'

const Index = ({ auth, flashMessage }) => {
    return (
        <Main auth={auth}>
            <Link href={route('admin.dashboard.movie.create')}>
                <PrimaryButton className={`!w-3/12`}>Create Movie</PrimaryButton>
            </Link>
            {
                flashMessage?.message && (
                    <FlashMessage message={flashMessage.message} />
                )
            }

        </Main>
    )
}

export default Index