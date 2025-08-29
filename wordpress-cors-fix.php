<?php
/**
 * Habilitar CORS para la API de WordPress
 * Agregar este código al archivo functions.php de tu tema
 */

// Habilitar CORS para la API REST
add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Expose-Headers: Link');
        header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Authorization');
        return $value;
    });
}, 15);

// Manejar preflight OPTIONS requests
add_action('init', function () {
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Expose-Headers: Link');
        header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Authorization');
        exit(0);
    }
});

// Habilitar CORS para todos los endpoints de la API
add_action('rest_api_init', function () {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Expose-Headers: Link');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Authorization');
});
?>
