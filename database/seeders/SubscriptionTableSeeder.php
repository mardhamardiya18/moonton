<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlans;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans = [
            [
                'name'  => 'Basic',
                'price' => 200000,
                'active_periode_in_months' => 3,
                'features' =>   json_encode(['Feature_1', 'Feature_2']),
                'is_premium'    => 0
            ],
            [
                'name'  => 'Premium',
                'price' => 600000,
                'active_periode_in_months' => 12,
                'features' =>   json_encode(['Feature_1', 'Feature_2', 'Feature_3', 'Feature_4']),
                'is_premium'    => 1
            ]
        ];

        SubscriptionPlans::insert($subscriptionPlans);
    }
}
