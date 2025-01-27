<?php
class PerkModel {
    public function create($data) {
        $sql = "INSERT INTO event_ticket_perks (event_id, perk_name, perk_description, perk_type, perk_limit) 
                VALUES (:event_id, :perk_name, :perk_description, :perk_type, :perk_limit)";
        // Execute database query
    }

    public function fetchByEvent($event_id) {
        $sql = "SELECT * FROM event_ticket_perks WHERE event_id = :event_id";
        // Execute database query
    }
}
?>