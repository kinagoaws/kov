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

/* __string_template__1638f29a10d9b43c355fc0f0aa5dbce2d95e17ba096c6775541827acb22ac746 */
class __TwigTemplate_ca75780ae893c0dbfc5ec0dcea90aa62c2f22fe9a54be1d3dbfe043ae94c03d0 extends Template
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
        echo "Your order #";
        echo twig_escape_filter($this->env, ($context["order_id"] ?? null), "html", null, true);
        echo " successfully delivered";
    }

    public function getTemplateName()
    {
        return "__string_template__1638f29a10d9b43c355fc0f0aa5dbce2d95e17ba096c6775541827acb22ac746";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("Your order #{{order_id}} successfully delivered", "__string_template__1638f29a10d9b43c355fc0f0aa5dbce2d95e17ba096c6775541827acb22ac746", "");
    }
}
