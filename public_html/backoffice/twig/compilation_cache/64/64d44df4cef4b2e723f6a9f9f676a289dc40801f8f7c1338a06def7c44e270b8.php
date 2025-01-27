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

/* __string_template__471eb112e7b756b464d86059bc2ce875f71ddc88b9ae5cb1789017d8bf40f308 */
class __TwigTemplate_5b1852460ad8202ceab0a4eeb651135026a9121493efc3d2bce454b2e74b90ee extends Template
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
        echo "Payout new request";
    }

    public function getTemplateName()
    {
        return "__string_template__471eb112e7b756b464d86059bc2ce875f71ddc88b9ae5cb1789017d8bf40f308";
    }

    public function getDebugInfo()
    {
        return array (  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("Payout new request", "__string_template__471eb112e7b756b464d86059bc2ce875f71ddc88b9ae5cb1789017d8bf40f308", "");
    }
}
