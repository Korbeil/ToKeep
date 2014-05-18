<?php
/**
 * Created by PhpStorm.
 * User: baptisteleduc
 * Date: 18/05/2014
 * Time: 04:45
 */

    $_ = $_GET;

    if(isset($_['data'])) {
        $_f = fopen('./js/keep-list.json', 'w+');
        fwrite($_f, $_['data']);
        fclose($_f);
    }