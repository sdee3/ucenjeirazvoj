@extends('layout/main')

@section('head')
  <title>Učenje i razvoj</title>
  <meta name='description' content='Učenje i razvoj - Da budemo bolja verzija sebe' />
  <meta property='og:type' content='website' />
  <meta property='og:url' content='https://ucenjeirazvoj.com/' />
  <meta property='og:title' content='Učenje i razvoj' />
  <meta property='og:description' content='Učenje i razvoj - Da budemo bolja verzija sebe' />
  <meta property='og:image' content='https://res.cloudinary.com/sdee3-com/image/upload/v1592039530/ucenjeirazvoj/ucenje-i-razvoj-cover.jpg
    ' />
  <meta property='twitter:card' content='summary_large_image' />
  <meta property='twitter:url' content='https://ucenjeirazvoj.com/' />
  <meta property='twitter:title' content='Učenje i razvoj' />
  <meta property='twitter:description' content='Učenje i razvoj - Da budemo bolja verzija sebe' />
  <meta property='twitter:image'
    content='https://res.cloudinary.com/sdee3-com/image/upload/v1592039530/ucenjeirazvoj/ucenje-i-razvoj-cover.jpg' />

  @if (env('APP_ENV') === 'production')
  <!-- Trackers for production -->
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-167145610-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-167145610-1');
  </script>
  @endif
@endsection

@section('body')