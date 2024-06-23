<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Movie\Create;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;


class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Movie/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Create $request)
    {
        $data = $request->validated();
        $data['thumbnail'] = Storage::disk('public')->put('Movie', $request->file('thumbnail'));
        $data['slug']   = Str::slug($data['name']);

        $movie = Movie::create($data);

        return redirect(route('admin.dashboard.movie.index'))->with([
            'message'   => "Movie created successfully",
            'type'  => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}