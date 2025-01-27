<?php
class TicketModel {
    public function generateQRCode($ticket_id) {
        // Include the PHP QR Code library
        require_once __DIR__ . '/../assets/phpqrcode/qrlib.php';

        // Set the QR code data
        $qr_data = "TicketID:" . $ticket_id;

        // Set the path where the QR code image will be saved
        $output_dir = __DIR__ . '/../assets/qrcodes/';
        if (!is_dir($output_dir)) {
            mkdir($output_dir, 0755, true); // Create directory if not exists
        }
        $filename = $output_dir . "ticket_" . $ticket_id . ".png";

        // Generate the QR code
        QRcode::png($qr_data, $filename, QR_ECLEVEL_L, 10); // Error correction level: L (Low)

        return $filename; // Return the file path
    }
}
?>