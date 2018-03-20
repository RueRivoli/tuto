<!DOCTYPE HTML>

<HTML>

<HEAD>
    <link rel="stylesheet" href="style.css">
    <script src="getXMLHttpRequest.js"></script>
            <script type="text/javascript">
         function ajaxGet(url, callback) {
            var req = new XMLHttpRequest();
            req.open("GET", url);
            req.addEventListener("load", function () {
            if (req.status >= 200 && req.status < 400) {
                // Appelle la fonction callback en lui passant la réponse de la requête
                callback(req.responseText);
            } else {
                 console.error(req.status + " " + req.statusText + " " + url);
            }
            });
            req.addEventListener("error", function () {
            console.error("Erreur réseau avec l'URL " + url);
        });
        req.send(null);
}

function afficher(reponse) {
    console.log(reponse);
}

ajaxGet("https://www.flatlooker.com/appartements.json?&page=2", afficher);
            </script>
</HEAD>

<BODY>
    <ul class="niveau1 ">
      <li class="pages">
        Pages
        <ul class="niveau2">
            <?PHP
            $i = 1;
            while ($i < 11)
            {
                echo "<li>Page ".$i."</li>";
                $i++;
            }
            ?>
        </ul>
      </li>
    </ul>
</BODY>

</HTML>