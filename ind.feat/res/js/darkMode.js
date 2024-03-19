function toggleDarkMode(){
    var body = document.querySelector('body');
    var btn = document.querySelector('.dm-toggler');
    var span = btn.querySelector('span');
    
    var lgo = document.getElementById('brandimg');
    
    if(body.classList.contains('light-mode')){
        var lightElems = document.getElementsByClassName('bg-light');
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        lgo.src = 'res/img/logod.jfif';
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');

        btn.classList.remove('btn-dark');
        btn.classList.add('btn-light');

        span.classList.remove('bi-moon-fill');
        span.classList.add('bi-sun-fill');

        Array.from(lightElems).forEach(function(el){
            el.classList.remove('bg-light');
            el.classList.add('light-mode');
        });
    }else if(body.classList.contains('dark-mode')){
        var lightElems = document.getElementsByClassName('light-theme');
        document.documentElement.setAttribute('data-bs-theme', 'light');
        lgo.src = 'res/img/logol.jfif';
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');

        btn.classList.remove('btn-light');
        btn.classList.add('btn-dark');

        span.classList.remove('bi-sun-fill');
        span.classList.add('bi-moon-fill');
        
        Array.from(lightElems).forEach(function(el){
            if(el.id == 'skewBottom' || el.id == 'skewTop'){
                el.classList.remove('light-mode');
                el.classList.add('bg-light');
            }
        });
    }

}
