@extends('layouts.main')
@section('main')

    <h3>Form</h3>

    @if($errors->any())
        <div class="alert-alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>
                        {{$error}}
                    </li>
                @endforeach
            </ul>
        </div>
    @endif

    <!-- register -->


        <form action="{{route('register')}}" method="POST">

            @method('POST')
            @csrf

            <label for="name"> Name</label>
            <input type="text" name="name"><br>

            <label for="email"> Email</label>
            <input type="email" name="email"><br>

            <label for="password"> Password</label>
            <input type="password" name="password"><br>

            <label for="password_confirmation"> Password-confirmation</label>
            <input type="password" name="password_confirmation"><br>

            <input type="submit" value="Register">
        </form>

    @auth
        <h4>Ciao <b>{{Auth::user() ->name}}</b> inserisci le tue credenziali per accedere ai contenuti</h4>
        <a class="btn btn-second" href="{{ route('logout') }}"> LOGOUT</a>
    @endauth

        <form action = "{{route('login')}}" method="POST">
            @method('POST')
            @csrf

            <!-- Login -->
            <label for="email"> Email</label>
            <input type="email" name="email"><br>

            <label for="password"> Password</label>
            <input type="password" name="password"><br>

            <a class="btn btn-second" href=""> login</a>

            <!-- <input type="submit" value="Login"> -->
        </form>





@endsection