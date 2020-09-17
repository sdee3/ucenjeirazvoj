@extends('layout/main')

@section('head')
<title>{{ $article->name }} | Učenje i razvoj</title>
<meta name='description'
	content='{{$article->intro ?? $article->name}} Učenje i razvoj | Produženi boravak, radionice za decu, programi za lični rast i razvoj.' />
<meta property='og:type' content='website' />
<meta property='og:url' content={{'https://ucenjeirazvoj.com/' . $slug}} />
<meta property='og:title' content='{{ $article->name }} | Učenje i razvoj' />
<meta property='og:description'
	content='{{$article->intro ?? $article->name}} Učenje i razvoj | Produženi boravak, radionice za decu, programi za lični rast i razvoj.' />
<meta property='og:image' content='{{$article->img_url}}' />
<meta property='twitter:card' content='summary_large_image' />
<meta property='twitter:url' content='{{'https://ucenjeirazvoj.com/' . $slug}} />
<meta property=' twitter:title' content='{{ $article->name }} | Učenje i razvoj' />
<meta property='twitter:description'
	content='{{$article->intro ?? $article->name}} Učenje i razvoj | Produženi boravak, radionice za decu, programi za lični rast i razvoj.' />
<meta property='twitter:image' content='{{$article->img_url}}' />
@endsection