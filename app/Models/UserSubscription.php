<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserSubscription extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'subscription_plan_id',
        'price',
        'expired_date',
        'payment_status',
        'snap_token'
    ];

    protected $dates = [
        'expired_date' // Misalkan expired_date adalah salah satu kolom di model ini
    ];

    public function subscriptionPlan()
    {
        return $this->belongsTo(SubscriptionPlans::class);
    }
}
