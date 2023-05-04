@extends('master')
@section('keywords', 'монтаж, Металлические, конструкции')
@section('title', 'БМК')
@section('description',
    'Компания БМК осуществляет разработку и изготовление металлоконструкций любой сложности, а также их дальнейший монтаж.
    Мы предлагаем вам огромное количество изделий различных видов. Это даёт возможность подобрать все, что необходимо
    для постройки того или иного объекта.
    Металлические конструкции от БМК — это продукция, соответствующая необходимым стандартам и даже превосходящая их.')
@section('content')
    <main class="main">
        @include('../sections.hero')
        @include('../sections.about')
        @include('../sections.advantages')
        @include('../sections.products')
        @include('../sections.services')
        @include('../sections.partners')
        @include('../sections.objects')
        @include('../sections.contacts')
    </main>
@endsection
