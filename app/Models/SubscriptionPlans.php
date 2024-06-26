<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubscriptionPlans extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name', 'price', 'active_periode_in_months', 'features', 'is_premium'
    ];
}
