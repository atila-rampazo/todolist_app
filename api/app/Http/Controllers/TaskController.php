<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        try {
            $tasks = Task::all();
            if(count($tasks)===0){
                return response()->json(['data'=>'Você não tem nenhuma tarefa criada'],404);
            }
            return response()->json(['data'=>$tasks],200);
        }catch (\Exception $exception){
            return response()->json(['data'=>'Ocorreu um erro ao objter as suas tarefas'],500);
        }
    }

    public function store(Request $request){
        try{
            $data = $request->only('task');
            Task::create($data);
            return response()->json(['data'=>'Tarefa incluída com sucesso'],201);
        }catch (\Exception $exception){
            return response()->json(['data'=>'Ocorreu um erro ao criar sua tarefa'],500);
        }
    }

    public function update($taskId,Request $request){
        try{

            $task = Task::find($taskId);
            $task->finish = $request->get('finish') ;
            $task->save();
            return response()->json(['data'=> $request->get('finish') ? 'Tarefa concluída com sucesso':'Tarefa retornada para andamento'],201);
        }catch (\Exception $exception){

            return response()->json(['data'=>'Ocorreu um erro ao atualizar a tarefa '.$exception->getMessage()],500);
        }
    }
}
