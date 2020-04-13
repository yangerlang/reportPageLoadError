    <script type="text/javascript">
        Fepm && Fepm.init();
        window.addEventListener('DOMContentLoaded',function(){
            var imgs = document.querySelectorAll('img');
            var links = document.querySelectorAll('link');
            var scripts = document.querySelectorAll('script');
            window.resourceErrQ = [];
            function watchSourceError(doms){
                [].forEach.call(doms,function(dom){
                    dom.addEventListener('error',function(e){
                        window.resourceErrQ.push(e)
                    })
                })
            }
            watchSourceError(imgs);
            watchSourceError(links);
            watchSourceError(scripts);
        })
    </script>
