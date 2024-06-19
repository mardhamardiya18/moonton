<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlans;
use Illuminate\Http\Request;
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
}
