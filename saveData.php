<?php
/**
 * Created by PhpStorm.
 * User: baptisteleduc
 * Date: 18/05/2014
 * Time: 04:45
 */

    $_ = $_GET;

    if(isset($_['data'])) {
        $return = array();
        $data = json_decode($_['data'], true);
        foreach($data as $index => $current) {
            $return[] = array(
                'title'         => $current['title'],
                'url'           => $current['url'],
                'description'   => $current['description'],
                'tags'          => $current['tags']
            );
        }
        $_f = fopen('./js/keep-list.json', 'w+');
        fwrite($_f, json_encode($return));
        fclose($_f);
    }