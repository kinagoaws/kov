<?php
class EventTicketsModule extends CWebModule {
    public function init() {
        $this->defaultController = 'default';
        $this->setImport(array(
            'kmrs-event-tickets.models.*',
            'kmrs-event-tickets.components.*',
        ));
    }

    public function beforeControllerAction($controller, $action) {
        if (parent::beforeControllerAction($controller, $action)) {
            return true;
        } else {
            return false;
        }
    }
}
?>