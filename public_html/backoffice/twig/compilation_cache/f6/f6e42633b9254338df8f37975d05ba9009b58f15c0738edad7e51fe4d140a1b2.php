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

/* __string_template__db92215c603d93a612e0dda998efcd9a4eaeea54e0bc992ef4a54918e3eb92c0 */
class __TwigTemplate_a99301957a8c0e5e3d181785d669d2137b8e7c429348b1bf290842487844cbbc extends Template
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
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["site"] ?? null), "title", [], "any", false, false, false, 1), "html", null, true);
        echo " - Registration";
    }

    public function getTemplateName()
    {
        return "__string_template__db92215c603d93a612e0dda998efcd9a4eaeea54e0bc992ef4a54918e3eb92c0";
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
        return new Source("{{site.title}} - Registration", "__string_template__db92215c603d93a612e0dda998efcd9a4eaeea54e0bc992ef4a54918e3eb92c0", "");
    }
}
