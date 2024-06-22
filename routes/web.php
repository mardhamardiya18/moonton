<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\SubscriptionController;
use App\Http\Middleware\CheckUserSubscription;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::redirect('/', '/login');

Route::middleware(['auth', 'role:user'])->name('user.dashboard.')->prefix('dashboard')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::get('/movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show')->middleware('check_user:true');
    Route::get('/subscription-plan', [SubscriptionController::class, 'index'])->name('subscription.index')->middleware('check_user:false');
    Route::post('subscription-plan/{subscriptionPlans}/user-subscribe', [SubscriptionController::class, 'userSubscribe'])->name('subscriptionPlan.userSubscribe')->middleware('check_user:false');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('/prototype')->name('prototype.')->group(function () {
    Route::get('/login', function () {
        return Inertia::render('Prototype/Login');
    })->name('login');

    Route::get('/register', function () {
        return Inertia::render('Prototype/Register');
    })->name('register');

    Route::get('/dashboard', function () {
        return Inertia::render('Prototype/Dashboard');
    })->name('dashboard');

    Route::get('/subscription', function () {
        return Inertia::render('Prototype/Payment');
    })->name('payment');

    Route::get('/movie/{slug}', function () {
        return Inertia::render('Prototype/Movie/Show');
    })->name('show');
});


require __DIR__ . '/auth.php';