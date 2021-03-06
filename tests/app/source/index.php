<?php
    $base = dirname(dirname(dirname(dirname($_SERVER['SCRIPT_NAME']))));
    $base = ($base === '/') ? '' : $base;
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="<?php echo $base; ?>/styles/global.css">
        <title>Browse Source</title>
        <script>
            document.write('<style media="all">#static { display: none; }</style>');
        </script>
    </head>

    <body>
        <div id="static">
            Please enable JavaScript in your browser
        </div>
        
        <!--<script src="<?php echo $base; ?>/vendor/scottschiller/SoundManager2/script/soundmanager2.js"></script>-->
        <script src="<?php echo $base; ?>/vendor/scottschiller/SoundManager2/script/soundmanager2-nodebug-jsmin.js"></script>
        
        <script>
            soundManager.setup({
                url: '<?php echo $base; ?>/vendor/scottschiller/SoundManager2/swf/'
            });
        </script>
        
        <script>
            var dojoConfig = {
                async: 1,
                cacheBust: 1,
                'routing-map': {
                    pathPrefix: '<?php echo $base; ?>/tests/app/source',
                    layers: {}
                }
            };
        </script>
        
        <script src="<?php echo $base; ?>/tests/config-packages.js"></script>
        <script src="<?php echo $base; ?>/tests/config-services.js"></script>
        <script src="<?php echo $base; ?>/vendor/dojo/dojo/dojo.js"></script>
        
        <script>
            require(['dojorama/App'], function (App) { new App(); });
        </script>
    </body>
</html>