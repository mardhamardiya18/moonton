<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlans;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SubscriptionController extends Controller
{
    public function index()
    {
        $subscriptions = SubscriptionPlans::all();

        return Inertia::render('User/Dashboard/Subscription/Payment', [
            'subscriptions'  => $subscriptions
        ]);
    }

    public function userSubscribe(Request $request, SubscriptionPlans $subscriptionPlans)
    {
        $data = [
            'user_id'   =>  Auth::id(),
            'subscription_plan_id'  => $subscriptionPlans->id,
            'price'     => $subscriptionPlans->price,
            'expired_date'  => Carbon::now()->addMonths($subscriptionPlans->active_periode_in_months),
            'payment_status'    => 'success'
        ];

        $userSubscription = UserSubscription::create($data);

        return redirect(route('user.dashboard.index'));
    }
}
