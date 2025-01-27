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

/* __string_template__e7f511a625a89c15714a84e465d8218e6aae90044f3e599c8142f1581f5060ef */
class __TwigTemplate_22a1a5a82b86e34078149fcb61b58b2f0444d2d74d1d04a0e46949159ae17256 extends Template
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
        echo "<p>Dear ";
        echo twig_escape_filter($this->env, ($context["restaurant_name"] ?? null), "html", null, true);
        echo ",<br><br>We are pleased to inform you that your bank deposit has been verified, and your subscription is now approved. Your account is active and you can now proceed to the merchant panel to start using our services.<br><br>Subscription Details:<br>- **Subscription Plan:** ";
        echo twig_escape_filter($this->env, ($context["plan_name"] ?? null), "html", null, true);
        echo "<br>- **Start Date:** ";
        echo twig_escape_filter($this->env, ($context["start_date"] ?? null), "html", null, true);
        echo "<br>- **End Date:** ";
        echo twig_escape_filter($this->env, ($context["end_date"] ?? null), "html", null, true);
        echo "<br><br>You can log in to your merchant panel here: ";
        echo twig_escape_filter($this->env, ($context["merchant_panel_url"] ?? null), "html", null, true);
        echo "<br><br>If you have any questions or need assistance, please do not hesitate to contact our support team.<br><br>Best regards,<br>";
        echo twig_escape_filter($this->env, ($context["site_title"] ?? null), "html", null, true);
        echo "<br><br></p>";
    }

    public function getTemplateName()
    {
        return "__string_template__e7f511a625a89c15714a84e465d8218e6aae90044f3e599c8142f1581f5060ef";
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
        return new Source("<p>Dear {{restaurant_name}},<br><br>We are pleased to inform you that your bank deposit has been verified, and your subscription is now approved. Your account is active and you can now proceed to the merchant panel to start using our services.<br><br>Subscription Details:<br>- **Subscription Plan:** {{plan_name}}<br>- **Start Date:** {{start_date}}<br>- **End Date:** {{end_date}}<br><br>You can log in to your merchant panel here: {{merchant_panel_url}}<br><br>If you have any questions or need assistance, please do not hesitate to contact our support team.<br><br>Best regards,<br>{{site_title}}<br><br></p>", "__string_template__e7f511a625a89c15714a84e465d8218e6aae90044f3e599c8142f1581f5060ef", "");
    }
}
