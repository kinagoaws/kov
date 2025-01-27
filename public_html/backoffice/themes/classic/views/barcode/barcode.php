<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Barcode for <?= htmlspecialchars($item->item_name); ?></title>
    <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/JsBarcode.all.min.js"></script>
</head>
<body>
    <h1>Barcode for <?= htmlspecialchars($item->item_name); ?></h1>
    <svg id="barcode"></svg>

    <script>
        // Generate the barcode
        JsBarcode("#barcode", "<?= $item->item_id; ?>", {
            format: "CODE128",
            lineColor: "#000",
            width: 2,
            height: 50,
            displayValue: true
        });
    </script>
</body>
</html>
