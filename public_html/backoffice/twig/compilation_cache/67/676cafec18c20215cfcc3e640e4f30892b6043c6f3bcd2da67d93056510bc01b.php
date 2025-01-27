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

/* __string_template__616a8801262d0ab36ef7f6a4756bc01b82f31b609f04b6bd4f37fbfc12226238 */
class __TwigTemplate_9b215a589617b4628272bb0e982ab8d2556d6bf3c701de0fbcb72aafdc9b3a07 extends Template
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
        echo "Sorry for the delay in delivery!";
    }

    public function getTemplateName()
    {
        return "__string_template__616a8801262d0ab36ef7f6a4756bc01b82f31b609f04b6bd4f37fbfc12226238";
    }

    public function getDebugInfo()
    {
        return array (  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("Sorry for the delay in delivery!", "__string_template__616a8801262d0ab36ef7f6a4756bc01b82f31b609f04b6bd4f37fbfc12226238", "");
    }
}
