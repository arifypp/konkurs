<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\KonkursCategory;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class KonkursCategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $konkursCategories = KonkursCategory::orderBy('created_at', 'DESC')->get();
        return Inertia::render('User/KonkursCategory/Index', [
            'konkursCategories' => $konkursCategories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // validate the data
        $request->validate([
            'name' => 'required|max:255,unique:konkurs_categories.name',
            'status' => 'required|max:255,required',
        ],
        [
            'name.required' => 'Name is required',
            'name.unique' => 'Name must be unique',
            'status.required' => 'Status is required',
        ]);

        // store in the database
        $konkursCategory = new KonkursCategory;

        $konkursCategory->name = $request->name;
        $konkursCategory->slug = Str::slug($request->name, '-');
        $konkursCategory->status = $request->status;
        $konkursCategory->description = $request->desc;
        $konkursCategory->save();

        // redirect to inertia page
        return Redirect::route('user.konkurs-category.index')->with(['success', 'Konkurs Category created successfully.'])->with('konkursCategories',  $konkursCategory);
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
        $konkursCategory = KonkursCategory::find($id);
        return Inertia::render('User/KonkursCategory/Index', [
            'editkonkursCategory' => $konkursCategory
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $request->validate([
            'name' => 'required|max:255,unique:konkurs_categories.name' . $id,
            'status' => 'required|max:255,required',
        ],
        [
            'name.required' => 'Name is required',
            'name.unique' => 'Name must be unique',
            'status.required' => 'Status is required',
        ]);

        // store in the database
        $konkursCategory = KonkursCategory::find($id);

        $konkursCategory->name = $request->name;
        $konkursCategory->slug = Str::slug($request->name, '-');
        $konkursCategory->status = $request->status;
        $konkursCategory->description = $request->desc;
        $konkursCategory->save();

        // redirect to inertia page
        return Redirect::route('user.konkurs-category.index')->with(['success', 'Konkurs Category updated successfully.'])->with('konkursCategories',  $konkursCategory);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $konkursCategory = KonkursCategory::find($id);
        $konkursCategory->delete();

        return Redirect::route('user.konkurs-category.index')->with(['success', 'Konkurs Category deleted successfully.']);
    }
}
