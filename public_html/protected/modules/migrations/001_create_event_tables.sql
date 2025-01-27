CREATE TABLE `event_tickets` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `event_name` VARCHAR(255),
  `event_date` DATETIME,
  `event_location` TEXT,
  `merchant_id` INT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `event_ticket_categories` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `event_id` INT,
  `seat_category` VARCHAR(255),
  `price` DECIMAL(10,2),
  `stock` INT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `event_ticket_perks` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `event_id` INT,
  `perk_name` VARCHAR(255),
  `perk_description` TEXT,
  `perk_type` ENUM('coupon', 'item', 'access'),
  `perk_limit` INT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `event_ticket_sales` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `order_id` INT,
  `ticket_id` INT,
  `quantity` INT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
