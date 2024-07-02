import React from 'react'
import Main from '@/Layouts/Authenticated/Main'
import SubscriptionCard from '@/Components/SubscriptionCard'
import { Head, router } from '@inertiajs/react'


const Payment = ({ auth, subscriptions, env }) => {

    const selectSubscription = (id) => {
        router.post(
            route("user.dashboard.subscriptionPlan.userSubscribe", {
                subscriptionPlans: id,
            }),
            {},
            {
                only: ["userSubscription"],
                onSuccess: ({ props }) => {
                    console.log(props)
                    onSnapMidtrans(props.userSubscription)
                }

            }
        )

        const onSnapMidtrans = (userSubscription) => {
            snap.pay(userSubscription.snap_token, {
                // Optional
                onSuccess: function (result) {
                    console.log({ result })
                },
                // Optional
                onPending: function (result) {
                    console.log({ result })
                },
                // Optional
                onError: function (result) {
                    console.log({ result })
                }
            });
        }

    }

    return (
        <Main auth={auth}>
            <Head title='Subscription Plan'>
                <script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key={env.MIDTRANS_CLIENTKEY}></script>
            </Head>
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
                                isPremium={subscription.name === 'Premium'}
                                key={subscription.id}
                                onSelectSubscription={() => selectSubscription(subscription.id)}
                            />
                        ))
                    }



                </div>

            </div>
        </Main>
    )
}

export default Payment