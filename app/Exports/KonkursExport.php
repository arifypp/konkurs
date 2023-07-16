<?php

namespace App\Exports;

use App\Models\Konkursdata;
use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromQuery;
class KonkursExport implements FromCollection , WithHeadings, FromQuery
{
    protected $konkursDataArray;

    public function __construct($konkursDataArray)
    {
        $this->konkursDataArray = $konkursDataArray;
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        // format the data
        $konkursDataArray = $this->konkursDataArray->map(function ($item, $key) {
            return [
                'Navn' => $item->konkurs_name,
                'Org nummer' => $item->konkurs_phone,
                'Bransje' => $item->konkurs_industry_position,
                'Fylke' => $item->konkurs_category->name,
                'Sted' => $item->konkurs_state,
                'postnummer' => $item->konkurs_zip,
                'adresse' => $item->konkurs_address,
                // 'website' => $item->konkurs_website,
                'Bobestyrer' => $item->konkurs_advocate,
                'Epost bobestyrer' => $item->konkurs_advocate_email,
            ];
        });

        return $konkursDataArray;
    }

    public function headings(): array
    {
        return [
            'Navn',
            'Org nummer',
            'Bransje',
            'Fylke',
            'Sted',
            'postnummer',
            'adresse',
            // 'website',
            'Bobestyrer',
            'Epost bobestyrer',
        ];
    }

    public function query()
    {
        return $this->konkursDataArray;
    }
}
