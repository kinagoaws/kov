<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* __string_template__5e3e3d58b863129427134daea9cb0aef140166004388182f1061359aca1886bd */
class __TwigTemplate_aaa5f844eb6689e51eb13f44c0d717c8630987cb8e6a240793331357b706aae8 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "Payout cancelled";
    }

    public function getTemplateName()
    {
        return "__string_template__5e3e3d58b863129427134daea9cb0aef140166004388182f1061359aca1886bd";
    }

    public function getDebugInfo()
    {
        return array (  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("Payout cancelled", "__string_template__5e3e3d58b863129427134daea9cb0aef140166004388182f1061359aca1886bd", "");
    }
}
