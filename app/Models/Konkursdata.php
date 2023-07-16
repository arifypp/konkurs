<?php

namespace App\Models;

use App\Models\User;
use App\Models\KonkursCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Konkursdata extends Model
{
    use HasFactory;

    protected $fillable = [
        'konkurs_id',
        'konkurs_name',
        'konkurs_slug',
        'konkurs_category_id',
        'konkurs_phone',
        'konkurs_industry_position',
        'konkurs_address',
        'konkurs_state',
        'konkurs_zip',
        'konkurs_advocate',
        'konkurs_advocate_email',
        'email_send',
        'created_by',
        'updated_by',
    ];

    protected $hidden = [
        'updated_at',
    ];

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->created_by = auth()->user()->id;
        });

        static::updating(function ($model) {
            $model->updated_by = auth()->user()->id;
        });
    }

    public function konkurs_category()
    {
        return $this->belongsTo(KonkursCategory::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, ['created_by', 'updated_by']);
    }
}
