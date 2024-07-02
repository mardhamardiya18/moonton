import React from 'react'
import Main from '@/Layouts/Authenticated/Main'
import SubscriptionCard from '@/Components/SubscriptionCard'

const Payment = () => {
    return (
        <Main>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                {/* Pricing Card */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* Basic */}
                    <SubscriptionCard name={"Basic"} price={295000} duration={3} features={["Feature 1", "Feature 2", "Feature 3"]} />

                    {/* For Greatest */}
                    <SubscriptionCard isPremium name={"for Greatest"} price={1000000} duration={12} features={["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5", "Feature 6"]} />
                </div>

            </div>
        </Main>
    )
}

export default Payment