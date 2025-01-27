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

/* __string_template__43ed4e3dc12d851302d02003d0ecf3330be54db373becd10beec2ad060e83fc0 */
class __TwigTemplate_01946ef28a8e95a0c7a00b01d9e4d265b05cecbefafc4d1bfd666bdd8f1a1fb0 extends Template
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
        echo "<p>Your order #";
        echo twig_escape_filter($this->env, ($context["order_id"] ?? null), "html", null, true);
        echo " successfully delivered<br></p>";
    }

    public function getTemplateName()
    {
        return "__string_template__43ed4e3dc12d851302d02003d0ecf3330be54db373becd10beec2ad060e83fc0";
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
        return new Source("<p>Your order #{{order_id}} successfully delivered<br></p>", "__string_template__43ed4e3dc12d851302d02003d0ecf3330be54db373becd10beec2ad060e83fc0", "");
    }
}
