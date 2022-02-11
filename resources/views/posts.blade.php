@extends('layouts.main')
@section('main')

<h1>POST</h1>
<table>
    <tr>
        <th>TITOLO</th>
        <th>SOTTITOLO</th>
        <th>GENERE</th>
        <th>TESTO</th>
        <th>AUTORE</th>
        <th>DATA</th>
    </tr>

    @foreach ($articles as $article)
        <tr>
          <td>{{$article -> titolo}}</td>
          <td>{{$article -> sottotitolo}}</td>
          <td>{{$article -> genere}}</td>
          <td>{{$article -> testo}}</td>
          <td>{{$article -> autore}}</td>
          <td>{{$article -> data}}</td>
        </tr>
    @endforeach
</table>
