<?php
class TicketModel {
    public function generateQRCode($ticket_id) {
        require_once __DIR__ . '/../assets/phpqrcode/qrlib.php';
        $qr_data = "TicketID:" . $ticket_id;
        $output_dir = __DIR__ . '/../assets/qrcodes/';
        if (!is_dir($output_dir)) {
            mkdir($output_dir, 0755, true);
        }
        $filename = $output_dir . "ticket_" . $ticket_id . ".png";
        QRcode::png($qr_data, $filename, QR_ECLEVEL_L, 10);
        return $filename;
    }
}
?>