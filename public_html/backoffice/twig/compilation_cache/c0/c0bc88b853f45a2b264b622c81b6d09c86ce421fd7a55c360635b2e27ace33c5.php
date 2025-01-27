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

/* __string_template__21adca5d26f3374af83f4c7030bce8516a01e1c0ae6d9924a42ffdf4f61af99c */
class __TwigTemplate_3af0a71c2aa361333974a8970bba0f3f59c3ca915bc06f7efa3849a59e84e64e extends Template
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
        echo "Your Subscription is Approved and Account is Now Active";
    }

    public function getTemplateName()
    {
        return "__string_template__21adca5d26f3374af83f4c7030bce8516a01e1c0ae6d9924a42ffdf4f61af99c";
    }

    public function getDebugInfo()
    {
        return array (  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("Your Subscription is Approved and Account is Now Active", "__string_template__21adca5d26f3374af83f4c7030bce8516a01e1c0ae6d9924a42ffdf4f61af99c", "");
    }
}
