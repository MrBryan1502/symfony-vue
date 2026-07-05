<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;

final class AppController extends AbstractController {

    #[Route('/{path}', name: 'app', requirements: ['path' => '^(?!api).+'])]
    public function index()
    {
        
        return $this->render('app.html.twig');
    }
}