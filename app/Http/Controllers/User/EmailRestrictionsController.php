<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\EmailRestriction;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;

class EmailRestrictionsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     */
    public function index( Request $request )
    {
        //
        $perPage = $request->input('per_page', 10);

        $konkursEmailRestrictions = EmailRestriction::orderBy('created_at', 'DESC')->latest()->paginate($perPage);
        return Inertia::render('User/KonkursRestrictions/Index', [
            'konkursEmailRestrictions' => $konkursEmailRestrictions
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
        // Validate the data
        $validatedData = $request->validate([
            'email' => [
                'required',
                'email',
                'max:255',
                'unique:email_restrictions,email'
            ]
        ]);

        // Store in the database
        $konkursEmailRestriction = EmailRestriction::create([
            'email' => $validatedData['email']
        ]);

        // Redirect to Inertia page
        return Redirect::route('user.email-restrictions.index')
            ->with('success', 'Email created successfully.')
            ->with('konkursEmailRestrictions', $konkursEmailRestriction);
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
        $konkursEmailRestriction = EmailRestriction::findOrFail($id);
        return Response::json($konkursEmailRestriction);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $validatedData = $request->validate([
            'email' => [
                'required',
                'email',
                'max:255',
                'unique:email_restrictions,email,' . $id
            ]
        ]);
        $konkursEmailRestriction = EmailRestriction::findOrFail($id);
        $konkursEmailRestriction->update($validatedData);
        return Redirect::route('user.email-restrictions.index')->with('success', 'Email updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $konkursEmailRestriction = EmailRestriction::findOrFail($id);
        $konkursEmailRestriction->delete();
        return Redirect::route('user.email-restrictions.index')->with('success', 'Email deleted successfully.');
    }
}
