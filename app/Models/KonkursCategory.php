<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class KonkursCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'status',
        'parent_id',
        'created_by',
        'updated_by',
    ];

    protected $hidden = [
        'created_at',
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

    public function parent()
    {
        return $this->belongsTo(KonkursCategory::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(KonkursCategory::class, 'parent_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, ['created_by', 'updated_by']);
    }
}
