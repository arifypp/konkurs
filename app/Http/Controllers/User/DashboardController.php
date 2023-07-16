<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Mail;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\KonkursCategory;
use App\Models\Konkursdata;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Http;
class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // count Konkursdata for [today, yesterday, current month, current year]
        $today = Konkursdata::whereDate('created_at', today())->count();
        $yesterday = Konkursdata::whereDate('created_at', today()->subDays(1))->count();
        $month = Konkursdata::whereMonth('created_at', today()->month)->count();
        $year = Konkursdata::whereYear('created_at', today()->year)->count();
        
        // inertia render
        return Inertia::render('Dashboard', [
            'today' => $today,
            'yesterday' => $yesterday,
            'month' => $month,
            'year' => $year,
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
        //
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
