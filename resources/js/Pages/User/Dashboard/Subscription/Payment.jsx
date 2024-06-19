import React from 'react'
import Index from '@/Layouts/Authenticated/Index'
import SubscriptionCard from '@/Components/SubscriptionCard'

const Payment = ({ auth, subscriptions }) => {
    return (
        <Index user={auth.user}>
            <div className=" flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                {/* Pricing Card */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {
                        subscriptions.map((subscription) => (
                            <SubscriptionCard
                                name={subscription.name}
                                price={subscription.price}
                                duration={subscription.active_periode_in_months}
                                features={JSON.parse(subscription.features)}
                                isPremium={subscription.is_premium}
                                key={subscription.id}
                            />
                        ))
                    }



                </div>

            </div>
        </Index>
    )
}

export default Payment