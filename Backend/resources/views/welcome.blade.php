@extends('layout')

@section('title', 'login')

@include('include.header')
@section('content')
    <div>
{{ auth()->user() }}




    </div>
@endsection
