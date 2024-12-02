<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmailRestriction extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'reason',
    ];
}
