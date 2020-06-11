<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
    integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
  <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
  <link rel='shortcut icon' type='image/x-icon' href="{{ asset('favicon.ico') }}" />
  <title>Učenje i razvoj</title>
  <meta name='description' content='Učenje i razvoj - Da budemo bolja verzija sebe' />
  <meta property='og:type' content='website' />
  <meta property='og:url' content='https://ucenjeirazvoj.com/' />
  <meta property='og:title' content='Učenje i razvoj' />
  <meta property='og:description' content='Učenje i razvoj - Da budemo bolja verzija sebe' />
  <meta property='og:image'
    content='https://res.cloudinary.com/sdee3-com/image/upload/v1589966037/ucenjeirazvoj/ucenjeirazvoj-main-txt.jpg' />
  <meta property='twitter:card' content='summary_large_image' />
  <meta property='twitter:url' content='https://ucenjeirazvoj.com/' />
  <meta property='twitter:title' content='Učenje i razvoj' />
  <meta property='twitter:description' content='Učenje i razvoj - Da budemo bolja verzija sebe' />
  <meta property='twitter:image'
    content='https://res.cloudinary.com/sdee3-com/image/upload/v1589966037/ucenjeirazvoj/ucenjeirazvoj-main-txt.jpg' />

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

  <script defer src="{{ mix('js/app-client.js') }}"></script>
</head>

<body>
  @if (Route::has('login'))
  <div class="top-right links">
    @auth
    <a href="{{ url('/home') }}">Home</a>
    @else
    <a href="{{ route('login') }}">Login</a>

    @if (Route::has('register'))
    <a href="{{ route('register') }}">Register</a>
    @endif
    @endauth
  </div>
  @endif

  {!! ssr('js/react/entry-server.js')
    // Share the packages with the server script through context
    // If ssr fails, we need a container to render the app client-side
    ->fallback('<div id="app"></div>')
    ->render() !!}
</body>

</html>