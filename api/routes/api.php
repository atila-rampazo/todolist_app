<?php

use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/',function(){
    return response()->json(['data'=>['version'=>1.0]],200);
});
Route::prefix('tasks')->group( function () {
    Route::get('/' , [TaskController::class, 'index']);
    Route::post('/' , [TaskController::class, 'store']);
    Route::put('/{taskId}' , [TaskController::class, 'update']);
});
