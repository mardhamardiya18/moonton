<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlans;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Midtrans\Snap;

class SubscriptionController extends Controller
{
    public function __construct()
    {
        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = env('MIDTRANS_SERVERKEY');
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = env('MIDTRANS_IS_PRODUCTION');
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = env('MIDTRANS_IS_SANITIZED');
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = env('MIDTRANS_IS_3DS');
    }

    public function index()
    {
        $subscriptions = SubscriptionPlans::all();

        return Inertia::render('User/Dashboard/Subscription/Payment', [
            'subscriptions'  => $subscriptions,
            'userSubscription'  => null
        ]);
    }

    public function userSubscribe(Request $request, SubscriptionPlans $subscriptionPlans)
    {
        $data = [
            'user_id'   =>  Auth::id(),
            'subscription_plan_id'  => $subscriptionPlans->id,
            'price'     => $subscriptionPlans->price,
            'payment_status'    => 'pending'
        ];

        $userSubscription = UserSubscription::create($data);

        $params = [
            'transaction_details' => [
                'order_id'  => $userSubscription->id . '-' . Str::random(5),
                'gross_amount' => $userSubscription->price
            ]
        ];

        $snapToken = Snap::getSnapToken($params);

        $userSubscription->update([
            'snap_token'    => $snapToken
        ]);

        return Inertia::render('User/Dashboard/Subscription/Payment', [
            'userSubscription'  => $userSubscription
        ]);
    }
}
