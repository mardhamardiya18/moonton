<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Create extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'category'  => 'required',
            'thumbnail' => 'required|image',
            'video_url' => 'required|url',
            'rating'    => 'required|numeric|min:0|max:5',
            'is_featured' => 'nullable|boolean'
        ];
    }
}