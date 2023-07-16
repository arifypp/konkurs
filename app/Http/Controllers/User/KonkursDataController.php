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
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\KonkursExport;
class KonkursDataController extends Controller
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
        $konkursCategory = KonkursCategory::where('status', 'active')->orderBy('name', 'ASC')->get();
        $konkursData = Konkursdata::with('konkurs_category')->orderBy('created_at', 'DESC')->get();
        return Inertia::render('User/KonkursData/Index', [
            'konkursData' => $konkursData,
            'konkursCategories' => $konkursCategory
        ]);
    }

    /**
     * Konkurs data for today.
     */
    public function today() {
        $konkursCategory = KonkursCategory::where('status', 'active')->orderBy('name', 'ASC')->get();
        $today = date('Y-m-d');
        $konkursData = Konkursdata::with('konkurs_category')->whereDate('created_at', date('Y-m-d'))->orderBy('created_at', 'DESC')->get();
        return Inertia::render('User/KonkursData/Today', [
            'konkursData' => $konkursData,
            'konkursCategories' => $konkursCategory
        ]);
    }

    /**
     * Konkurs data for yesterday.
     */
    public function yesterday() {
        $konkursCategory = KonkursCategory::where('status', 'active')->orderBy('name', 'ASC')->get();
        $yestreday = date('Y-m-d', strtotime('-1 day'));
        $konkursData = Konkursdata::with('konkurs_category')->whereDate('created_at', $yestreday)->orderBy('created_at', 'DESC')->get();
        return Inertia::render('User/KonkursData/Yesterday', [
            'konkursData' => $konkursData,
            'konkursCategories' => $konkursCategory
        ]);
    }

    /**
     * Konkurs data for month.
     */
    public function monthly() {
        $konkursCategory = KonkursCategory::where('status', 'active')->orderBy('name', 'ASC')->get();
        $konkursData = Konkursdata::with('konkurs_category')->whereDate('created_at', '>=', date('Y-m-01'))->orderBy('created_at', 'DESC')->get();
        return Inertia::render('User/KonkursData/Monthly', [
            'konkursData' => $konkursData,
            'konkursCategories' => $konkursCategory
        ]);
    }

    /**
     * Konkurs data for yearly.
     */
    public function yearly() {
        $konkursCategory = KonkursCategory::where('status', 'active')->orderBy('name', 'ASC')->get();
        $konkursData = Konkursdata::with('konkurs_category')->whereDate('created_at', '>=', date('Y-01-01'))->orderBy('created_at', 'DESC')->get();
        return Inertia::render('User/KonkursData/Yearly', [
            'konkursData' => $konkursData,
            'konkursCategories' => $konkursCategory
        ]);
    }

    /**
     * Konkurs sendmail.
     */
    public function sendmail($id) {
        $konkursData = Konkursdata::findOrfail($id);
        if ($konkursData->email_send == 1) {
            return Redirect::route('user.konkurs.today')->with('error', 'Konkursdata already send.');
        }
        Mail::send('emails.konkurs', ['konkursData' => $konkursData], function ($message) use ($konkursData) {
            $message->from('eh@ksalg.no', 'Ksalg.no');
            $message->to($konkursData->konkurs_advocate_email);
            $message->subject('Konkursboet til ' . $konkursData->konkurs_name);
        });

        $konkursData->email_send = 1;
        $konkursData->save();
        
        return Redirect::route('user.konkurs.today')->with('success', 'Konkursdata send successfully.');
    }
    
    /**
     * Export for the resource.
     */
    public function export($id)
    {
        // Convertto array
        $rowSelectedId = explode(',', $id);
        
        // Get all selected konkurs data
        $konkursDataArray = Konkursdata::with('konkurs_category')->whereIn('id', $rowSelectedId)->get();
    
        // date a day ago
        $date = date('Y-m-d', strtotime('-1 day'));
    
        // Export konkurs data to Excel
        return Excel::download(new KonkursExport($konkursDataArray), 'KONKURSBO-' . $date . '.xlsx');
    }
    

    

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'name' => 'required|max:255',
            'phone' => 'required|max:255',
            'category' => 'required',
            'address' => 'required|max:255',
            'industry_position' => 'required',
            'advocateemail' => 'required',
            'advocaname' => 'required',
        ]);

        $konkursData = new Konkursdata();
        $konkursData->konkurs_id = Str::uuid();
        $konkursData->konkurs_name = $request->input('name');
        $konkursData->konkurs_slug = Str::slug($request->input('name'));
        $konkursData->konkurs_phone = $request->input('phone');
        $konkursData->konkurs_category_id = $request->input('category');
        $konkursData->konkurs_state = $request->input('state');
        $konkursData->konkurs_zip = $request->input('post_code');
        $konkursData->konkurs_address = $request->input('address');
        $konkursData->konkurs_industry_position = $request->input('industry_position');
        $konkursData->konkurs_advocate = $request->input('advocaname');
        $konkursData->konkurs_advocate_email = $request->input('advocateemail');
        $konkursData->save();

        return Redirect::route('user.konkurs.index')->with('success', 'Konkursdata added successfully.')->with('konkursData', $konkursData);
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
        $konkursData = Konkursdata::findOrFail($id);
        $konkursData->delete();

        return Redirect::route('user.konkurs.index')->with('success', 'Konkursdata deleted successfully.');
    }
}
